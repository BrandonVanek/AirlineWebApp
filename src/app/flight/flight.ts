export interface Flight {
    id: number;
    flightNumber: string;
    Destination: string;
    DepartureDateTime : string;
    ArrivalDateTime : string;
    DepartureAirport : string;
    ArrivalAirport : string;
    maxCapacity: number;
}