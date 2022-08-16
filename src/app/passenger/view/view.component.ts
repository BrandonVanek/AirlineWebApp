import { Component, OnInit } from '@angular/core';
import { PassengerService } from '../passenger.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Passenger } from '../passenger';
     
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
    
  form!: FormGroup;
  passenger: Passenger;
  id: number;

  constructor(
    public passengerService: PassengerService,
    private router: Router,
    private route: ActivatedRoute
  ) { 
    let url = this.route.snapshot.url.join('/');
    let urlParams = url.split('/');
    this.id = +urlParams[1];
    this.passenger = {
      id: this.id,
      name: '',
      job: '',
      email: '',
      age: 0,
      bookings: []
    }
    console.log(this.passenger);
  } 
    
  async ngOnInit() {
    this.loadPassenger();
    // this.form = new FormGroup({
    //   passengerNumber: new FormControl(this.passenger.passengerNumber, Validators.required),
    //   destination: new FormControl(this.passenger.destination, Validators.required),
    //   departureDateTime: new FormControl(this.passenger.departureDateTime, Validators.required),
    //   arrivalDateTime: new FormControl(this.passenger.arrivalDateTime, Validators.required),
    //   departureAirport: new FormControl(this.passenger.departureAirport, Validators.required),
    //   arrivalAirport: new FormControl(this.passenger.arrivalAirport, Validators.required),
    //   maxCapacity: new FormControl(this.passenger.maxCapacity, Validators.required),
    //   bookings: new FormControl(this.passenger.bookings),
    // });
  }

  // updateValues(dataObject: any) {
  //   this.form.patchValue({
  //     passengerNumber: this.passenger.passengerNumber,
  //     destination: this.passenger.destination,
  //     departureDateTime: this.passenger.departureDateTime,
  //     arrivalDateTime: this.passenger.arrivalDateTime, 
  //     departureAirport: this.passenger.departureAirport,
  //     arrivalAirport: this.passenger.arrivalAirport, 
  //     maxCapacity: this.passenger.maxCapacity,
  //     bookings: this.passenger.bookings
  //   });
  //   console.log(this.passenger);
  // }

  loadPassenger() {
    this.passengerService.getPassenger(this.id).subscribe(fl => {
      this.passenger = fl;
      // this.updateValues(this.passenger);
      console.log(this.passenger);
    })
  }

  // get f() { return this.form.controls; }
    
  // submit(){
  //   // this.form.value["departureDateTime"] = this.passenger.departureDateTime;
  //   // this.form.value["arrivalDateTime"] = this.passenger.arrivalDateTime;
  //   console.log(this.form.value);
  //   console.log(this.form.valid);
  //   this.passengerService.updatePassenger(this.form.value, this.id).subscribe(() => {
  //     console.log("Passenger updated successfully!");
  //     this.router.navigateByUrl('passenger/index');
  //   });
  // }
  
}