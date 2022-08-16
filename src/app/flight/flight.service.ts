
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {  Observable } from 'rxjs';
  
import { Flight } from './flight';
import { ActivatedRoute } from '@angular/router';
  
@Injectable({
  providedIn: 'root'
})
export class FlightService {
  
  private apiURL = "https://localhost:7062/api/Flights";
    
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient, private route: ActivatedRoute) { }

  getFlights(): Observable<Flight[]> {
    return this.httpClient.get<Flight[]>(this.apiURL, this.httpOptions);
  }

  getFlight(id:number): Observable<Flight> {
    let url = `${this.apiURL}/${id}`;
    return this.httpClient.get<Flight>(url, this.httpOptions);
  }

  createFlight(flight:Flight): Observable<Flight> {
    return this.httpClient.post<Flight>(this.apiURL, flight, this.httpOptions)
  }  

  updateFlight(flight:Flight, id: number): Observable<Flight> {
    let url = `${this.apiURL}/${id}`
    flight.id = id;
    return this.httpClient.put<Flight>(url, flight, this.httpOptions)
  }

  deleteFlight(id:number): Observable<Flight> {
    let url = `${this.apiURL}/${id}`
    return this.httpClient.delete<Flight>(url, this.httpOptions)
  }
}