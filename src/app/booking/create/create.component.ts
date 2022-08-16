import { Component, OnInit } from '@angular/core';
import { BookingService } from '../booking.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { FlightService } from 'src/app/flight/flight.service';
import { PassengerService } from 'src/app/passenger/passenger.service';
     
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
    
  form!: FormGroup;

  constructor(
    public bookingService: BookingService,
    public flightService: FlightService,
    public passengerService: PassengerService,
    private router: Router
  ) { } 
    
  ngOnInit(): void {
    this.form = new FormGroup({
      flightId: new FormControl('', Validators.required),
      flight: new FormControl(''),
      passengerId: new FormControl('', Validators.required),
      passenger: new FormControl(''),
      confirmationNumber: new FormControl(''),
    });
  }

  get f() { return this.form.controls; }


  submit(){
    const genRanHex = (size: number) => [...Array(size)].map(() => Math.floor(Math.random() * 16).toString(16)).join('');
    this.form.value["confirmationNumber"] = genRanHex(16);
    this.form.value["flight"] = this.flightService.getFlight(this.form.value["flightId"]);
    this.form.value["passenger"] = this.passengerService.getPassenger(this.form.value["passengerId"]);
    console.log(this.form.value);
    console.log(this.form.valid);
    this.bookingService.createBooking(this.form.value).subscribe(() => {
      console.log("Booking created successfully!");
      this.router.navigateByUrl('booking/index');
    });
  }
  
}