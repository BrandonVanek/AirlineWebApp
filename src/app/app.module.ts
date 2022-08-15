import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateComponent } from './Create/create/create.component';
import { FlightComponent } from './flight/flight.component';
import { PassengerComponent } from './passenger/passenger.component';
import { BookingComponent } from './booking/booking.component';
import { EditComponent } from './booking/edit/edit.component';
import { ViewComponent } from './booking/view/view.component';
import { IndexComponent } from './booking/index/index.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    FlightComponent,
    PassengerComponent,
    BookingComponent,
    EditComponent,
    ViewComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
