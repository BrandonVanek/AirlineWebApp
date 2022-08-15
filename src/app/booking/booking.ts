export interface Booking {
    flightId: number;
    passengerId: number;
    confirmationNumber: string;
    bookings: Booking[];
}