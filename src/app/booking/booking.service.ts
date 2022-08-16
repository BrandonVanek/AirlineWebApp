
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {  Observable } from 'rxjs';
  
import { Booking } from './booking';
import { ActivatedRoute } from '@angular/router';
  
@Injectable({
  providedIn: 'root'
})
export class BookingService {
  
  private apiURL = "https://localhost:7062/api/Bookings";
    
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient, private route: ActivatedRoute) { }

  getBookings(): Observable<Booking[]> {
    return this.httpClient.get<Booking[]>(this.apiURL, this.httpOptions);
  }

  // getBooking(id:number): Observable<Booking> {
  //   let url = `${this.apiURL}/${id}`;
  //   return this.httpClient.get<Booking>(url, this.httpOptions);
  // }

  createBooking(booking:Booking): Observable<Booking> {
    return this.httpClient.post<Booking>(this.apiURL, booking, this.httpOptions)
  }  

  // updateBooking(booking:Booking, id: number): Observable<Booking> {
  //   let url = `${this.apiURL}/${id}`
  //   booking.id = id;
  //   return this.httpClient.put<Booking>(url, booking, this.httpOptions)
  // }

  deleteBooking(id:number): Observable<Booking> {
    let url = `${this.apiURL}/${id}`
    return this.httpClient.delete<Booking>(url, this.httpOptions)
  }
}