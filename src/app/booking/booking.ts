import { Flight } from "../flight/flight";
import { Passenger } from "../passenger/passenger";

export interface Booking {
    id: number;
    flightId: number;
    flight: Flight;
    passengerId: number;
    passenger: Passenger;
    confirmationNumber: string;
}