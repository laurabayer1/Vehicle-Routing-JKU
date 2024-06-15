import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {RoutePoint, Vehicle, VehicleT} from "../models/shared";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  // TODO: Pfad ändren, wenn REST Schnitstelle zu Julian und Sara lokal läuft
  basePath_vehicle = "http://localhost:3001/vehicles" // Sara
  basePath_routepoints = "http://localhost:3000/routePoints" // Julian

  constructor(private httpClient: HttpClient, private router: Router) {
  }

  public findAllVehicles(): Observable<VehicleT[]> {
    return this.httpClient.get<VehicleT[]>(this.basePath_vehicle);
  }

  public findAllRoutePoints(): Observable<RoutePoint[]>{
    return this.httpClient.get<RoutePoint[]>(this.basePath_routepoints);
  }
}
