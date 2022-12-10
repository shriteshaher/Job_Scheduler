import { HttpClient } from '@angular/common/http';
import { StringMap } from '@angular/compiler/src/compiler_facade_interface';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookingServiceService {
   API_URL="http://127.0.0.1:8080"
  constructor(private http:HttpClient) { }

  fetch_Booking(booking:string){
    return this.http.get(`${this.API_URL}/fetch_booking_data?bs_name=${booking}`)
  }

  update_Booking(status:string,booking:string,name:string){
    return this.http.get(`${this.API_URL}/appointment_Update?bs_name=${booking}&&status=${status}&&name=${name}`)
  }

  addBookingSlots(data:Object){
    return this.http.post(`${this.API_URL}/bussiness_availiblity`,data)
  }

  fetch_BookingSlots(data:string){
    return this.http.get(`${this.API_URL}/fetch_appointment_availiblity?bs_name=${data}`)
  }

  delete_BookingSlots(bs_name:string,time_slots:string){
     return this.http.delete(`${this.API_URL}/bussiness_fetcher_time_delete?bs_name=${bs_name}&time_slots=${time_slots}`)
  }
}
