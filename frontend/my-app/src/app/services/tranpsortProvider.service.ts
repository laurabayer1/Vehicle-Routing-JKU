import {HttpClient} from "@angular/common/http";
import {environment} from "../environments/environment";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {Person} from "../models/person";
import { FormsModule } from '@angular/forms';
import {TransportProvider} from "../models/TransportProvider";

@Injectable({
  providedIn: 'root'
})
export class TransportProviderService {
  endpoint: string = "/transportProvider";

  constructor(private http: HttpClient){}

  createTransportProvider(transportProvider: TransportProvider): Observable<TransportProvider> {
    console.log(transportProvider);
    return this.http.post<TransportProvider>(environment.apiUrl + this.endpoint, transportProvider)
  }
}
