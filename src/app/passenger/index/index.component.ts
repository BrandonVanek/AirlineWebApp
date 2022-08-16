import { Component, OnInit } from '@angular/core';
import { PassengerService } from '../passenger.service';
import { Passenger } from '../passenger';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  passengers: Passenger[] = [];

  constructor(private passengerService: PassengerService) { }

  ngOnInit(): void {
    this.retrievePassengers();
  }

  retrievePassengers() : void {
    this.passengerService.getPassengers().subscribe(passengers => this.passengers = passengers);
  }

  removePassenger(id : number): void {
    if(confirm("Are you sure to delete this passenger?")) {
      console.log(`ID of the passenger to be removed: ${id}`)  
      this.passengerService.deletePassenger(id).subscribe({
        next: () => {
          this.passengers = this.passengers.filter(u => u.id != id)
          console.log(`The passenger with ID = ${id} have been removed.`)
        },
        error: () => {
          console.log(`An error occurred when trying to remove the passenger with ID = ${id}.`)
        }
      })
    }
  }
}
