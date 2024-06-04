import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../environments/environment";
import {Address} from "../models/address";

@Injectable({
  providedIn: 'root'
})
export class AddressService {
  endpoint: string = "/address";

  constructor(private http: HttpClient){}

  createAddress(address: Address): Observable<Address> {
    console.log(address);
    return this.http.post<Address>(environment.apiUrl + this.endpoint, address)
  }
}
