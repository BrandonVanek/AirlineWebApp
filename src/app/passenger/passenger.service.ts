
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {  Observable, throwError } from 'rxjs';
  
import { Passenger } from './passenger';
  
@Injectable({
  providedIn: 'root'
})
export class PassengerService {
  
  private apiURL = "https://localhost:7062/api/Passengers";
    
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }
    
  getPassengers(): Observable<Passenger[]> {
  
    return this.httpClient.get<Passenger[]>(this.apiURL, this.httpOptions);
  }

  getFlight(id:number): Observable<Passenger> {
    let url = `${this.apiURL}/${id}`
    return this.httpClient.get<Passenger>(url, this.httpOptions);
  }

  createPassenger(passenger:Passenger): Observable<Passenger> {
  
    return this.httpClient.post<Passenger>(this.apiURL, JSON.stringify(passenger), this.httpOptions)
  }  
    
  updatePassenger(id:number, passenger:Passenger): Observable<any> {
    let url = `${this.apiURL}/${id}`
    return this.httpClient.put(url, JSON.stringify(passenger), this.httpOptions)
  }
       
  deletePassenger(id:number){
    let url = `${this.apiURL}/${id}`
    return this.httpClient.delete(url, this.httpOptions)
  }
}