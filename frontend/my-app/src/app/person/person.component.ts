import { Component } from '@angular/core';
import {PersonService} from "../services/person.service";


import {error} from "@angular/compiler-cli/src/transformers/util";
import { Person } from '../models/person';
import {Address} from "../models/address";
import {Coordinates} from "../models/coordinates";

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrl: './person.component.css'
})
export class PersonComponent {

  public person: Person = new Person("", "", "", "", new Date(), new Address(), new Address(), new Coordinates(), new Coordinates(), false);

  private startAddressId : number = 0;

  private targetAdressId : number = 0;

  constructor(private PersonService: PersonService){
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
}


