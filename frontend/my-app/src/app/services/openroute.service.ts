import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Address} from "../models/address";
import {Observable} from "rxjs";
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class OpenrouteService {
  private apiKey: string = '5b3ce3597851110001cf6248ad4fedecde514dae87901ada1ec60db3';
  private baseUrl: string = "https://api.openrouteservice.org/";


  constructor(private http: HttpClient){}

  getCoordinates(text: string): Observable<any> {
    return this.http.get<any>(this.baseUrl + 'geocode/search' + `?api_key=${this.apiKey}&text=${encodeURIComponent(text)}`)
  }
}
