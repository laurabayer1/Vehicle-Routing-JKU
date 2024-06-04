import { Component } from '@angular/core';
import {PersonService} from "../services/person.service";
import {error} from "@angular/compiler-cli/src/transformers/util";
import { Person } from '../models/person';
import {TransportProvider} from "../models/TransportProvider";
import {TransportProviderService} from "../services/tranpsortProvider.service";
import {Address} from "../models/address";
import {Coordinates} from "../models/coordinates";

@Component({
  selector: 'app-trans',
  templateUrl: './transport-provider.component.html',
  styleUrl: './transport-provider.component.css'
})
export class TransportProviderComponent {

  public transportProvider: TransportProvider = new TransportProvider("", "", new Address(), new Coordinates());

  constructor(private transportProviderService: TransportProviderService){
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

