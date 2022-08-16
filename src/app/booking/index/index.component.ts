import { Component, OnInit } from '@angular/core';
import { BookingService } from '../booking.service';
import { Booking } from '../booking';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  bookings: Booking[] = [];

  constructor(private bookingService: BookingService) { }

  ngOnInit(): void {
    this.retrieveBookings();
  }

  retrieveBookings() : void {
    this.bookingService.getBookings().subscribe(bookings => this.bookings = bookings)
  }
  
  removeFlight(id : number): void {
    if(confirm("Are you sure to delete this booking?")) {
      console.log(`ID of the booking to be removed: ${id}`)  
      this.bookingService.deleteBooking(id).subscribe({
        next: () => {
          this.bookings = this.bookings.filter(u => u.id != id)
          console.log(`The booking with ID = ${id} have been removed.`)
        },
        error: () => {
          console.log(`An error occurred when trying to remove the booking with ID = ${id}.`)
        }
      })
    }
  }
}
