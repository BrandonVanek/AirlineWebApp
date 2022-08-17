import { Component, OnInit } from '@angular/core';
import { BookingService } from '../booking.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { FlightService } from 'src/app/flight/flight.service';
import { PassengerService } from 'src/app/passenger/passenger.service';
import { Flight } from "../../flight/flight";
import { Passenger } from 'src/app/passenger/passenger';
     
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
    
  form!: FormGroup;
  max!: boolean;
  passengersAndFlights: boolean;

  constructor(
    public bookingService: BookingService,
    public flightService: FlightService,
    public passengerService: PassengerService,
    private router: Router
  ) { 
    this.max = false;
    this.passengersAndFlights = false;
  } 
    
  ngOnInit(): void {
    this.form = new FormGroup({
      flightId: new FormControl('', Validators.required),
      flight: new FormControl(''),
      passengerId: new FormControl('', Validators.required),
      passenger: new FormControl(''),
      confirmationNumber: new FormControl(''),
    });
  }

  ngOnChanges(): void {
    this.max = false; 
  }

  get f() { return this.form.controls; }


  submit(){
    this.flightService.getFlights().subscribe((res: Flight[]) => {
      // console.log(res.length)
      if (res.length > 0) {
        this.passengerService.getPassengers().subscribe((res: Passenger[]) => {
          // console.log(res.length)
          if (res.length > 0) {
            this.passengersAndFlights = true;
            const genRanHex = (size: number) => [...Array(size)].map(() => Math.floor(Math.random() * 16).toString(16)).join('');
            this.form.value["confirmationNumber"] = genRanHex(16);
            this.flightService.getFlight(this.form.value["flightId"])
              .subscribe((response: Flight) => {
                if (response.bookings.length >= response.maxCapacity) {
                  this.max = true;
                  this.form.controls['flight'].markAsTouched();
                  // console.log(this.max);
                  alert("This flight has reached its maximum capacity, please choose a different flight!");
                  return;
                }
                else {
                  // console.log(this.max);
                  this.form.value["flight"] = this.flightService.getFlight(this.form.value["flightId"]);
                  this.form.value["passenger"] = this.passengerService.getPassenger(this.form.value["passengerId"]);
                  // console.log(this.form.value);
                  // console.log(this.form.valid);
                  this.bookingService.createBooking(this.form.value).subscribe(() => {
                    console.log("Booking created successfully!");
                    this.router.navigateByUrl('booking/index');
                  }, error => alert("Passenger NOT FOUND choose an existing PassengerId\n" + error.message));
                  this.max = false;
                  return;
                }
              }, error => alert("Flight NOT FOUND choose an existing FlightId\n" + error.message));
          }
          else {
            alert("There must be at least one passenger and one flight in the database to make a booking!");
          }
        });
      }          
      else {
        alert("There must be at least one passenger and one flight in the database to make a booking!");
      }
    });
  }
  
}