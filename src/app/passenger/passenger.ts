import { Booking } from "../booking/booking";

export interface Passenger {
    id: number;
    name: string;
    job: string;
    email: string;
    age: number;
    bookings: Booking[];
}