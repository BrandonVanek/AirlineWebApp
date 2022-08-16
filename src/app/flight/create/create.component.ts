import { Component, OnInit } from '@angular/core';
import { FlightService } from '../flight.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';
     
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
    
  form!: FormGroup;
  departureDateTime: Date;
  arrivalDateTime: Date;
  localDepartureDateTime: string;
  localArrivalDateTime: string;

  constructor(
    public flightService: FlightService,
    private router: Router
  ) { 
    this.departureDateTime = new Date();
    this.localDepartureDateTime = this.departureDateTime.toISOString();
    this.localDepartureDateTime = this.localDepartureDateTime.substring(0, this.localDepartureDateTime.length - 1);
    this.arrivalDateTime = new Date();
    this.localArrivalDateTime = this.arrivalDateTime.toISOString();
    this.localArrivalDateTime = this.localArrivalDateTime.substring(0, this.localArrivalDateTime.length - 1);
  } 
    
  ngOnInit(): void {
    this.form = new FormGroup({
      flightNumber: new FormControl('', Validators.required),
      destination: new FormControl('', Validators.required),
      departureDateTime: new FormControl(this.localDepartureDateTime, Validators.required),
      arrivalDateTime: new FormControl(this.localArrivalDateTime, Validators.required),
      departureAirport: new FormControl('', Validators.required),
      arrivalAirport: new FormControl('', Validators.required),
      maxCapacity: new FormControl('', Validators.required),
    });
  }

  get f() { return this.form.controls; }
    
  submit(){
    console.log(this.form.value);
    console.log(this.form.valid);
    this.flightService.createFlight(this.form.value).subscribe(() => {
      console.log("Flight created successfully!");
      this.router.navigateByUrl('flight/index');
    });
  }
  
}