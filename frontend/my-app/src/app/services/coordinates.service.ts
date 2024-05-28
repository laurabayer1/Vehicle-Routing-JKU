import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../environments/environment";
import {Coordinates} from "../models/coordinates";

@Injectable({
  providedIn: 'root'
})
export class CoordinatesService {
  endpoint: string = "/coordinates";

  constructor(private http: HttpClient){}

  createAddress(coordinates: Coordinates): Observable<Coordinates> {
    return this.http.post<Coordinates>(environment.apiUrl + this.endpoint, coordinates)
  }
}
