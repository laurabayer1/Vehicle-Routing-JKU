import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {RoutePoint, Vehicle, VehicleT} from "../models/shared";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  // REST Schnittstellen zu Julian und Sara
  // json-server --watch routePoints.json --port 3000
  // json-server --watch vehicleDB.json --port 3001
  basePath_vehicle = "http://localhost:8081/vehicles" // SaraDummydaten
  //basePath_routepoints = "http://localhost:3000/routePoints" // Julian Dummydaten
  basePath_routepoints = "http://localhost:8080/RoutePoints"

  constructor(private httpClient: HttpClient, private router: Router) {
  }
  //Abfragen der Daten von Transportdienstleister und Wageneinsatzplanung
  public findAllVehicles(): Observable<VehicleT[]> {
    return this.httpClient.get<VehicleT[]>(this.basePath_vehicle);
  }

  public findAllRoutePoints(): Observable<RoutePoint[]>{
    return this.httpClient.get<RoutePoint[]>(this.basePath_routepoints);
  }
}
