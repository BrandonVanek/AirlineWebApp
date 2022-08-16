import { Booking } from "../booking/booking";
import { Passenger } from "../passenger/passenger";

export interface Flight {
    id: number;
    flightNumber: string;
    destination: string;
    departureDateTime : string;
    arrivalDateTime : string;
    departureAirport : string;
    arrivalAirport : string;
    maxCapacity: number;
    bookings: Passenger[];
}

export interface FlightDTO {
    flightNumber: string;
    destination: string;
    departureDateTime : string;
    arrivalDateTime : string;
    departureAirport : string;
    arrivalAirport : string;
    maxCapacity: number;
    bookings: Booking[];
}