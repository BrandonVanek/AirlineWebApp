import { Component, OnInit } from '@angular/core';
import { PassengerService } from '../passenger.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  form!: FormGroup;

  constructor(
    public passengerService: PassengerService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      job: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      age: new FormControl('', Validators.required),
    });
  }

  get f() { return this.form.controls; }
    
  submit(){
    console.log(this.form.value);
    console.log(this.form.valid);
    this.passengerService.createPassenger(this.form.value).subscribe(() => {
      console.log("Passenger created successfully!");
      this.router.navigateByUrl('passenger/index');
    });
  }
}
