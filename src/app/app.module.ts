import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FlightCreateComponent } from './flight/create/create.component';
import { FlightEditComponent } from './flight/edit/edit.component';
import { FlightViewComponent } from './flight/view/view.component';
import { FlightIndexComponent } from './flight/index/index.component';

import { PassengerCreateComponent } from './passenger/create/create.component';
import { PassengerEditComponent } from './passenger/edit/edit.component';
import { PassengerViewComponent } from './passenger/view/view.component';
import { PassengerIndexComponent } from './passenger/index/index.component';

import { BookingCreateComponent } from './booking/create/create.component';
import { BookingEditComponent } from './booking/edit/edit.component';
import { BookingViewComponent } from './booking/view/view.component';
import { BookingIndexComponent } from './booking/index/index.component';

@NgModule({
  declarations: [
    AppComponent,
    FlightCreateComponent,
    FlightEditComponent,
    FlightViewComponent,
    FlightIndexComponent,
    PassengerCreateComponent,
    PassengerEditComponent,
    PassengerViewComponent,
    PassengerIndexComponent,
    BookingCreateComponent,
    BookingEditComponent,
    BookingViewComponent,
    BookingIndexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
