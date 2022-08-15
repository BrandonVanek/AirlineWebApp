import { Booking } from "../booking/booking";

export interface Flight {
    id: number;
    flightNumber: string;
    destination: string;
    departureDateTime : string;
    arrivalDateTime : string;
    departureAirport : string;
    arrivalAirport : string;
    maxCapacity: number;
    bookings: Booking[];
}

export interface FlightDTO {
    flightNumber: string;
    destination: string;
    departureDateTime : string;
    arrivalDateTime : string;
    departureAirport : string;
    arrivalAirport : string;
    maxCapacity: number;
}