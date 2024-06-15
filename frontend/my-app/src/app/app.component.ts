import { Component, OnInit } from '@angular/core';
import {RoutePoint, VehicleT} from "./models/shared";
import {SharedService} from "./services/shared.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Vehicle Routing';

  vehicles: VehicleT[] = [];
  routePoints: RoutePoint[] = [];

  constructor(private sharedService: SharedService) {}

  ngOnInit() {
    this.fetchVehicles();
    this.fetchRoutePoints();
  }

  fetchVehicles() {
    this.sharedService.findAllVehicles().subscribe((data: VehicleT[]) => {
      this.vehicles = data;
    });
  }

  fetchRoutePoints() {
    this.sharedService.findAllRoutePoints().subscribe((data: RoutePoint[]) => {
      this.routePoints = data;
    });
  }
}
