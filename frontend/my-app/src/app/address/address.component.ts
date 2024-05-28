import { Component } from '@angular/core';
import {Address} from "../models/address";
import {AddressService} from "../services/address.service";

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrl: './address.component.css'
})
export class AddressComponent {

  public address: Address = new Address();

  constructor(private AddressService: AddressService){
  }

  public save(): void {
    console.log(this.address);
    this.AddressService.createAddress(this.address).subscribe({
      next: (response) => {
        console.log('Addresse erfolgreich angelegt:', response);
      },
      error: (err) => {
        console.error('Error Addresse anlegen:', err);
      },
    });
  }
}
