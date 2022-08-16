import { Component, OnInit } from '@angular/core';
import { FlightService } from '../flight.service';
import { Flight } from '../flight';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  flights: Flight[] = [];

  constructor(private flightService: FlightService) { }

  ngOnInit(): void {
    this.retrieveFlights();
  }

  retrieveFlights() : void {
    this.flightService.getFlights().subscribe(flights => this.flights = flights)
  }
  
  removeFlight(id : number): void {
    if(confirm("Are you sure to delete this flight?")) {
      console.log(`ID of the flight to be removed: ${id}`)  
      this.flightService.deleteFlight(id).subscribe({
        next: () => {
          this.flights = this.flights.filter(u => u.id != id)
          console.log(`The flight with ID = ${id} have been removed.`)
        },
        error: () => {
          console.log(`An error occurred when trying to remove the flight with ID = ${id}.`)
        }
      })
    }
  }
}
