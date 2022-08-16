
import { Booking } from "../booking/booking";
import { Flight, FlightDTO } from "../flight/flight";

export interface Passenger {
    id: number;
    name: string;
    job: string;
    email: string;
    age: number;
    bookings: FlightDTO[];
}

export interface PassengerDTO {
    name: string;
    job: string;
    email: string;
    age: number;
}