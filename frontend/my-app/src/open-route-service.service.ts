import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from './app/environments/environment';
import {Feature, GeocodeResponse} from "./GeocodeResponse";

@Injectable({
  providedIn: 'any',
})
export class OpenRouteServiceService {
  private baseUrl: string = 'https://api.openrouteservice.org/';

  constructor(private http: HttpClient) { }

  getCoordinates(address: string): Observable<GeocodeResponse> {
    const url = `${this.baseUrl}/geocode/autocomplete?api_key=${environment.openRouteServiceApiKey}&text=` + address;
    console.log(url);
    return this.http.get<GeocodeResponse>(url).pipe(
      map(rawResponse => this.transformToGeocodeResponse(rawResponse))
    );
  }

  private transformToGeocodeResponse(rawResponse: any): GeocodeResponse {
    return {
      geocoding: rawResponse.geocoding,
      type: rawResponse.type,
      features: rawResponse.features.map((feature: any) => this.transformFeature(feature)),
      bbox: rawResponse.bbox
    };
  }

  private transformFeature(rawFeature: any): Feature {
    return {
      type: rawFeature.type,
      geometry: rawFeature.geometry,
      properties: {
        id: rawFeature.properties.id,
        gid: rawFeature.properties.gid,
        layer: rawFeature.properties.layer,
        source: rawFeature.properties.source,
        source_id: rawFeature.properties.source_id,
        name: rawFeature.properties.name,
        accuracy: rawFeature.properties.accuracy,
        country: rawFeature.properties.country,
        country_gid: rawFeature.properties.country_gid,
        country_a: rawFeature.properties.country_a,
        continent: rawFeature.properties.continent,
        continent_gid: rawFeature.properties.continent_gid,
        label: rawFeature.properties.label,
        addendum: rawFeature.properties.addendum,
      },
      bbox: rawFeature.bbox,
    };
  }

  getDistance(startCoordinates: string, destinationCoordinates: string): Observable<number> {
    const url = `${this.baseUrl}/v2/directions/driving-car?api_key=${environment.openRouteServiceApiKey}&start=${startCoordinates}&end=${destinationCoordinates}`;
    return this.http.get<any>(url).pipe(
      map(rawResponse => this.extractDistance(rawResponse))
    );
  }

  private extractDistance(rawResponse: any): number {
    if (rawResponse.features && rawResponse.features.length > 0 && rawResponse.features[0].properties && rawResponse.features[0].properties.summary) {
      return rawResponse.features[0].properties.summary.distance;
    } else {
      throw new Error('No distance information available in the response');
    }
  }
}
