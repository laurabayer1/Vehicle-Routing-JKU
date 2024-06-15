import { Component } from '@angular/core';
import {PersonService} from "../services/person.service";


import {error} from "@angular/compiler-cli/src/transformers/util";
import { Person } from '../models/person';
import {Address} from "../models/address";
import {Coordinates} from "../models/coordinates";
import {OpenrouteService} from "../services/openroute.service";
import * as L from 'leaflet';


type Coordinate = [number, number]; // Tuple representing [longitude, latitude]

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
  public coordList: Coordinate[] = [];
  public person: Person = new Person("", "", "", "", new Date(), new Address(), new Address(), new Coordinates(), new Coordinates(), false);

  private startAddressId : number = 0;

  private targetAdressId : number = 0;

  constructor(private PersonService: PersonService, private openrouteService: OpenrouteService){
    }

  triggerGetCoordinates():void{
    this.getCoordnates(this.person.startAddress.streetName + '' + this.person.startAddress.doorNumber + ', ' + this.person.startAddress.zipcode + ' ' +this.person.startAddress.city);

  }

    public getCoordnates(text: string): any {
      this.openrouteService.getCoordinates(text).subscribe(
        {
          next: value => {
            console.log(value);

            this.coordList = this.extractCoordinates(value);
            //console.log('coord1: ' + value.features[0].geometry[0]);
            //console.log(value.features[0].geometry.coordinates[0]);
            console.log(this.coordList);
          },
          error: err => {
            console.log(err);
          }
        }
      )
    }

    changeFunctionStart(){
    this.showMapStart = true;
    console.log(this.startpoint![0] + ' ' + this.startpoint![1])
    //TODO:
      this.initMap(this.startpoint![1], this.startpoint![0], 'start')

      //TODO: ausgewählte koordinaten dem person object zuweisen
    }

  changeFunctionTarget(){
    this.showMapTarget = true;
    //TODO:
    //this.initMap(long, lat, 'start')

    //TODO: ausgewählte koordinaten dem person object zuweisen
  }

  public save(): void {
    console.log(this.person);

    console.log(this.getCoordnates(this.person.startAddress.streetName + '' + this.person.startAddress.doorNumber + ', ' + this.person.startAddress.zipcode + ' ' +this.person.startAddress.city));

    this.PersonService.createPerson(this.person).subscribe({
      next: (response) => {
        console.log('Person erfolgreich angelegt:', response);
      },
      error: (err) => {
        console.error('Error Person anlegen:', err);
      },
    });
  }

  extractCoordinates(value: any): Coordinate[] {
    const coordinatesList: Coordinate[] = [];

    for (const feature of value.features) {
      const longitude = feature.geometry.coordinates[0];
      const latitude = feature.geometry.coordinates[1];
      coordinatesList.push([longitude, latitude]);
    }

    return coordinatesList;
  }
  // ************** MAP *****************
  private map?: L.Map;

  private initMap(latitude: number, longitude: number, maptype: string): void {
    this.map = L.map(maptype).setView([latitude, longitude], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);

    // Add a single marker
    const marker = L.marker([latitude, longitude]).addTo(this.map);
    marker.bindPopup('A single point on the map');
  }

}


