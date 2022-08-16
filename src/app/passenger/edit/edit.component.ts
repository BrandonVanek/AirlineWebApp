import { Component, OnInit } from '@angular/core';
import { PassengerService } from '../passenger.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Passenger } from '../passenger';
     
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
    
  form!: FormGroup;
  passenger: Passenger;
  id: number;
  // departureDateTime: Date;
  // arrivalDateTime: Date;
  // localDepartureDateTime: string;
  // localArrivalDateTime: string;

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
    // this.departureDateTime = new Date();
    // this.localDepartureDateTime = this.departureDateTime.toISOString();
    // this.localDepartureDateTime = this.localDepartureDateTime.substring(0, this.localDepartureDateTime.length - 1);
    // this.arrivalDateTime = new Date();
    // this.localArrivalDateTime = this.arrivalDateTime.toISOString();
    // this.localArrivalDateTime = this.localArrivalDateTime.substring(0, this.localArrivalDateTime.length - 1);
  } 
    
  ngOnInit() : void {
    this.loadPassenger();
    this.form = new FormGroup({
      name: new FormControl(this.passenger.name, Validators.required),
      job: new FormControl(this.passenger.job, Validators.required),
      email: new FormControl(this.passenger.email, Validators.required),
      age: new FormControl(this.passenger.age, Validators.required),
      bookings: new FormControl(this.passenger.bookings),
    });
  }

  updateValues(dataObject: any) {
    this.form.patchValue({
      name: this.passenger.name,
      job: this.passenger.job,
      email: this.passenger.email,
      age: this.passenger.age, 
      bookings: this.passenger.bookings
    });
  }

  loadPassenger() {
    this.passengerService.getPassenger(this.id).subscribe(fl => {
      this.passenger = fl;
      this.updateValues(this.passenger);
    })
  }

  get f() { return this.form.controls; }
    
  submit(){
    // console.log(this.form.value);
    // console.log(this.form.valid);
    this.passengerService.updatePassenger(this.form.value, this.id).subscribe(() => {
      console.log("Passenger updated successfully!");
      this.router.navigateByUrl('passenger/index');
    });
  }
  
}