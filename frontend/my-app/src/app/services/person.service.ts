import {HttpClient} from "@angular/common/http";
import {environment} from "../environments/environment";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {Person} from "../models/person";
import { FormsModule } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  endpoint: string = "/person";

  constructor(private http: HttpClient){}

  createPerson(person: Person): Observable<Person> {
    return this.http.post<Person>(environment.apiUrl + this.endpoint, person)
  }
}
