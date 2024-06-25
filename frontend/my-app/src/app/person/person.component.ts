import { Component } from '@angular/core';
import {PersonService} from "../services/person.service";


import {error} from "@angular/compiler-cli/src/transformers/util";
import { Person } from '../models/person';
import {Address} from "../models/address";
import {Coordinates} from "../models/coordinates";
import {OpenrouteService} from "../services/openroute.service";
import * as L from 'leaflet';


type Coordinate = [number, number]; // Tuple repräsentiert [longitude, latitude]

interface Geometry {
  coordinates: Coordinate;
}


@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrl: './person.component.css'
})
export class PersonComponent {
  public showMapStart: boolean = false;
  public showMapTarget: boolean = false;
  public startpoint?: Coordinate;
  public targetpoint?: Coordinate;
  public coordList: Coordinate[] = []; // start adresses
  public coordList2: Coordinate[] = []; //target adresses
  public person: Person = new Person("", "", "", "", new Date(), new Address(), new Address(), new Coordinates(), new Coordinates(), false);

  private startAddressId : number = 0;

  private targetAdressId : number = 0;

  constructor(private PersonService: PersonService, private openrouteService: OpenrouteService){
    }

    // ****************  Koordinaten  ****************

  triggerGetCoordinates(maptype: string):void{
    if(maptype == 'start')
      this.getCoordnatesStart(this.person.startAddress.streetName + '' + this.person.startAddress.doorNumber + ', ' + this.person.startAddress.zipcode + ' ' +this.person.startAddress.city);
    else
      this.getCoordnatesTarget(this.person.targetAddress.streetName + '' + this.person.targetAddress.doorNumber + ', ' + this.person.targetAddress.zipcode + ' ' +this.person.targetAddress.city);

  }

    public getCoordnatesStart(text: string): any {    // Ruft Coordianten für Startadresse auf und speichern in coordList
      this.openrouteService.getCoordinates(text).subscribe(
        {
          next: value => {
            console.log(value);

            this.coordList =  this.extractCoordinates(value);
          },
          error: err => {
            console.log(err);
          }
        }
      )
    }

  public getCoordnatesTarget(text: string): any {   // Ruft Coordianten für Zieladresse auf und speichern in coordList
    this.openrouteService.getCoordinates(text).subscribe(
      {
        next: value => {
          console.log(value);

          this.coordList2 =  this.extractCoordinates(value);
        },
        error: err => {
          console.log(err);
        }
      }
    )
  }
  // Aktualisierierte koordinaten dem person object zuweisen + auf Karte anzeigen
    changeFunctionStart(){
    console.log(this.startpoint);
    this.showMapStart = true;
    console.log(this.startpoint![0] + ' ' + this.startpoint![1])
      this.initMap(this.startpoint![1], this.startpoint![0], 'start')

      this.person.startCoordinates =  {longitude: this.startpoint![1], latitude: this.startpoint![0]};
    }

  changeFunctionTarget(){
    console.log()
    this.showMapTarget = true;
    console.log(this.targetpoint![0] + ' ' + this.targetpoint![1])
    this.initMap(this.targetpoint![1], this.targetpoint![0], 'target')

    this.person.targetCoordinates =  {longitude: this.targetpoint![1], latitude: this.targetpoint![0]};


  }

  public save(): void {
    console.log(this.person);

    this.PersonService.createPerson(this.person).subscribe({
      next: (response) => {
        console.log('Person erfolgreich angelegt:', response);
      },
      error: (err) => {
        console.error('Error Person anlegen:', err);
      },
    });
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

  // ************** MAP initialisieren + Marker *****************

  private maps: { [id: string]: L.Map } = {};
  private markers: { [id: string]: L.Marker } = {};

  private initMap(latitude: number, longitude: number, maptype: string): void {
    if(this.maps[maptype]){
      this.maps[maptype].remove() //entfernen der Karte und erstellen einer neuen Z.139
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

  private isMapInitialized(id: string): boolean { //doppelte initialisierung der Karte ausschließen
    return this.maps[id] !== undefined;
  }

}


