
// Wageneinsatzpläne
export interface RoutePoint {
  id: number,
  description: String,
  sequenz: number,
  atHome: boolean,
  coordinates: string,
  vehicle: number
}

export interface Vehicle {
  id: number;
  companyName: string;
  vehicleDescription: string;
  coordinates: string;
  canTransportWheelchairs: boolean;
  seatingPlaces: number;
}

export interface Person {
  id: number;
  name: string;
  startCoordinate: string;
  endCoordinate: string;
  company: string;
  needsWheelchair?: boolean;
}

// Transportdienstleister
export interface Address {
  id: number | null;
  streetName: string;
  doorNumber: string;
  zipcode: string;
  city: string;
}

export interface Coordinates {
  latitude: number;
  longitude: number;
}

export interface TransportProvider {
  id: number | null;
  companyName: string;
  username: string;
  password: string;
  accountLocked: boolean;
  enabled: boolean;
  review: string;
  companyAddress: Address;
  companyCoordinates: Coordinates;
}

export interface VehicleT {
  transportProvider: TransportProvider;
  companyName: string;
  vehicleType: string;
  vehicleDescription: string;
  canTransportWheelchairs: boolean;
  seatingPlaces: number;
  startCoordinate: Coordinates;
  endCoordinate: Coordinates;
}


