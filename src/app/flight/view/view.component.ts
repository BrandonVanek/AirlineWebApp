import { Component, OnInit } from '@angular/core';
import { FlightService } from '../flight.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Flight } from '../flight';
     
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
    
  form!: FormGroup;
  flight: Flight;
  id: number;

  constructor(
    public flightService: FlightService,
    private router: Router,
    private route: ActivatedRoute
  ) { 
    let url = this.route.snapshot.url.join('/');
    let urlParams = url.split('/');
    this.id = +urlParams[1];
    this.flight = {
      id: this.id,
      flightNumber: '',
      destination: '',
      departureDateTime: '',
      arrivalDateTime: '',
      departureAirport: '',
      arrivalAirport: '',
      maxCapacity: 0,
      bookings: []
    }
    console.log(this.flight);
  } 
    
  async ngOnInit() {
    this.loadFlight();
    // this.form = new FormGroup({
    //   flightNumber: new FormControl(this.flight.flightNumber, Validators.required),
    //   destination: new FormControl(this.flight.destination, Validators.required),
    //   departureDateTime: new FormControl(this.flight.departureDateTime, Validators.required),
    //   arrivalDateTime: new FormControl(this.flight.arrivalDateTime, Validators.required),
    //   departureAirport: new FormControl(this.flight.departureAirport, Validators.required),
    //   arrivalAirport: new FormControl(this.flight.arrivalAirport, Validators.required),
    //   maxCapacity: new FormControl(this.flight.maxCapacity, Validators.required),
    //   bookings: new FormControl(this.flight.bookings),
    // });
  }

  // updateValues(dataObject: any) {
  //   this.form.patchValue({
  //     flightNumber: this.flight.flightNumber,
  //     destination: this.flight.destination,
  //     departureDateTime: this.flight.departureDateTime,
  //     arrivalDateTime: this.flight.arrivalDateTime, 
  //     departureAirport: this.flight.departureAirport,
  //     arrivalAirport: this.flight.arrivalAirport, 
  //     maxCapacity: this.flight.maxCapacity,
  //     bookings: this.flight.bookings
  //   });
  //   console.log(this.flight);
  // }

  loadFlight() {
    this.flightService.getFlight(this.id).subscribe(fl => {
      this.flight = fl;
      // this.updateValues(this.flight);
      console.log(this.flight);
    })
  }

  // get f() { return this.form.controls; }
    
  // submit(){
  //   // this.form.value["departureDateTime"] = this.flight.departureDateTime;
  //   // this.form.value["arrivalDateTime"] = this.flight.arrivalDateTime;
  //   console.log(this.form.value);
  //   console.log(this.form.valid);
  //   this.flightService.updateFlight(this.form.value, this.id).subscribe(() => {
  //     console.log("Flight updated successfully!");
  //     this.router.navigateByUrl('flight/index');
  //   });
  // }
  
}