
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
  
import { BookingRoutingModule } from './booking-routing.module';
import { IndexComponent } from './index/index.component';
import { CreateComponent } from './create/create.component';
  
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
  
@NgModule({
  declarations: [IndexComponent, CreateComponent],
  imports: [
    CommonModule,
    BookingRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class BookingModule { }