import { Component } from '@angular/core';
import {PersonService} from "../services/person.service";
import {error} from "@angular/compiler-cli/src/transformers/util";
import { Person } from '../models/person';
import {TransportProvider} from "../models/TransportProvider";
import {TransportProviderService} from "../services/tranpsortProvider.service";
import {Address} from "../models/address";
import {Coordinates} from "../models/coordinates";
import {OpenrouteService} from "../services/openroute.service";
import * as L from "leaflet";

type Coordinate = [number, number]; // Tuple repräsentiert [longitude, latitude]

@Component({
  selector: 'app-trans',
  templateUrl: './transport-provider.component.html',
  styleUrl: './transport-provider.component.css'
})
export class TransportProviderComponent {
  public coordListTP: Coordinate[] = []; // TP addresse
  public startpoint?: Coordinate;
  public showMapStart: boolean = false;

  public transportProvider: TransportProvider = new TransportProvider("", "", new Address(), new Coordinates());

  constructor(private transportProviderService: TransportProviderService, private openrouteService: OpenrouteService){
  }

  public getCoordnatesTranportProvider(text: string): any {    // Ruft Coordianten für TranportProvider auf und speichern in coordList
    this.openrouteService.getCoordinates(text).subscribe(
      {
        next: value => {
          console.log(value);

          this.coordListTP =  this.extractCoordinates(value);
        },
        error: err => {
          console.log(err);
        }
      }
    )
  }

  // Aktualisierierte koordinaten dem person object zuweisen + auf Karte anzeigen
  changeFunctionTP(){
    console.log(this.startpoint);
    this.showMapStart = true;
    console.log(this.startpoint![0] + ' ' + this.startpoint![1])
    this.initMap(this.startpoint![1], this.startpoint![0], 'start')

    this.transportProvider.companyCoordinates =  {longitude: this.startpoint![1], latitude: this.startpoint![0]};
  }


  // ************** MAP initialisieren + Marker *****************

  private maps: { [id: string]: L.Map } = {};
  private markers: { [id: string]: L.Marker } = {};

  private initMap(latitude: number, longitude: number, maptype: string): void {
    if(this.maps[maptype]){
      this.maps[maptype].remove() //entfernen der Karte und erstellen einer neuen
      delete this.maps[maptype]
    }

    this.destroyMap(maptype);
    this.maps[maptype] = L.map(maptype).setView([latitude, longitude], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.maps[maptype]);

    // Hinzufügen eines Markers an übergebene Koordinate
    const marker = L.marker([latitude, longitude]).addTo(this.maps[maptype]);
    marker.bindPopup('Standort');

  }

  private destroyMap(id: string): void {
    if (this.maps[id]) {
      this.maps[id].remove();
      delete this.maps[id];
    }
  }

  // ******************** Extraktion Koordinaten ********************

  extractCoordinates(value: any): Coordinate[] {
    const coordinatesList: Coordinate[] = [];   // leere Liste um extrahierte Coords zu speichern

    for (const feature of value.features) {
      const longitude = feature.geometry.coordinates[0];
      const latitude = feature.geometry.coordinates[1];
      coordinatesList.push([longitude, latitude]);    //einfügen in die Liste
    }

    return coordinatesList;
  }

  public save(): void {
    this.transportProviderService.createTransportProvider(this.transportProvider).subscribe({
      next: (response: TransportProvider) => {
        console.log('Transportdienstleister erfolgreich angelegt:', response);
      },
      error: (err: any) => {
        console.error('Error Transportdienstleister anlegen:', err);
      },
    });
  }
}

