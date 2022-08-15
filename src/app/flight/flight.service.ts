
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {  Observable } from 'rxjs';
  
import { Flight } from './flight';
  
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

  constructor(private httpClient: HttpClient) { }

  getFlights(): Observable<Flight[]> {
    return this.httpClient.get<Flight[]>(this.apiURL, this.httpOptions);
  }

  getFlight(id:number): Observable<Flight> {
    let url = `${this.apiURL}/${id}`;
    return this.httpClient.get<Flight>(url, this.httpOptions);
  }

  createFlight(flight:Flight): Observable<Flight> {
  
    return this.httpClient.post<Flight>(this.apiURL, JSON.stringify(flight), this.httpOptions)
  }  

  update(flight:Flight): Observable<Flight> {
    let url = `${this.apiURL}/${flight.id}`
    return this.httpClient.put<Flight>(url, JSON.stringify(flight), this.httpOptions)
  }

  delete(id:number): Observable<Flight> {
    let url = `${this.apiURL}/${id}`
    return this.httpClient.delete<Flight>(url, this.httpOptions)
  }
}