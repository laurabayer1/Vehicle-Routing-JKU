import {Address} from "./address";
import {Coordinates} from "./coordinates";

export class TransportProvider {
  companyName: string;
  review: string;
  companyAddress: Address;
  companyCoordinates?: Coordinates;

  constructor(
    companyName: string,
    review: string,
    companyAddress: Address,
    companyCoordinates: Coordinates
  ) {
    this.companyName = companyName;
    this.review = review;
    this.companyAddress = companyAddress;
    this.companyCoordinates = companyCoordinates;
  }
}

