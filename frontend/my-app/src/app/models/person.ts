import {Address} from "./address";
import {Coordinates} from "./coordinates";


export class Person {
  id?: number;
  gender: string;
  titel: string;
  firstName: string;
  lastName: string;
  birthday: Date;
  startAddress: Address;
  targetAddress: Address;
  startCoordinates: Coordinates;
  targetCoordinates: Coordinates;
  wheelchair: boolean;

  constructor(
    gender: string,
    titel: string,
    firstName: string,
    lastName: string,
    birthday: Date,
    startAddress: Address,
    targetAddress: Address,
    startCoordinates: Coordinates,
    targetCoordinates: Coordinates,
    wheelchair: boolean
  ) {
    this.gender = gender;
    this.titel = titel;
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = birthday;
    this.startAddress = startAddress;
    this.targetAddress = targetAddress;
    this.startCoordinates = startCoordinates;
    this.targetCoordinates = targetCoordinates;
    this.wheelchair = wheelchair;
  }
}

