import {AfterViewInit, Component} from '@angular/core';
import { OpenRouteServiceService } from '../../open-route-service.service';
import * as Leaflet from 'leaflet';
import { FormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

@Component({
  selector: 'app-map',
  standalone: true,
  templateUrl: './map.component.html',
  styleUrl: './map.component.css',
  imports: [FormsModule, MatRadioModule, LeafletModule]
})
export class MapComponent implements AfterViewInit{

  residenceAddress: string = '';
  destinationAddress: string = '';
  mapCoords: String;
  Longitude: number;
  Latitude: number;
  theMap:any;
  options: Leaflet.MapOptions = {
    layers: getLayers(),
    zoom: 12,
    center: new Leaflet.LatLng(14.317777777778,48.337222222222)
  };

  constructor(
  private openRouteService: OpenRouteServiceService
) {
    this.mapCoords = "";
    this.Latitude= 0;
    this.Longitude= 0;
  }

  ngAfterViewInit(): void {
    this.renderMap(14.31777777778,48.337222222222);
  }

  renderMap(long:number,lat:number){
    if(this.theMap) {
      this.theMap.remove();
    }
    this.theMap = Leaflet.map('map', {
      center: [ lat,long ],
      zoom: 13
    });
    let layr = new Leaflet.TileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    });
    layr.addTo(this.theMap);
    let markr = new Leaflet.Marker(new Leaflet.LatLng(lat,long), {
      icon: new Leaflet.Icon({
        iconSize: [50, 41],
        iconAnchor: [13, 41],
        iconUrl: 'assets/red_marker.svg',
      }),
      title: 'JKU Linz'
    });
    markr.addTo(this.theMap);
  }


  mapUpdate(){
    this.Longitude= parseFloat(this.mapCoords.split(",")[0]);
    this.Latitude= parseFloat(this.mapCoords.split(",")[1]);

    this.renderMap(this.Longitude,this.Latitude);
  }


}


export const getLayers = (): Leaflet.Layer[] => {
  return [
    new Leaflet.TileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    } as Leaflet.TileLayerOptions),getMarkers()
  ] as Leaflet.Layer[];
};

export const getMarkers = (): Leaflet.Marker[] => {
  console.log("Location :")
  console.log(window.location)
  return [
    new Leaflet.Marker(new Leaflet.LatLng(14.317777777778,48.337222222222 ), {
      icon: new Leaflet.Icon({
        iconSize: [50, 41],
        iconAnchor: [13, 41],
        iconUrl: '../assets/red-marker.svg',
      }),
      title: 'JKU Linz'
    } as Leaflet.MarkerOptions)
  ] as Leaflet.Marker[];
};

