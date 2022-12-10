import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApplyAppointmentService {

  constructor(private http:HttpClient) { }

  apply_Appointment(appointment:object){
     console.log(appointment)
     return this.http.post("http://127.0.0.1:8080/appointment_booking",appointment)
  }

  booking_appointer_details_bs(){
    return this.http.get("http://127.0.0.1:8080/fetch_appointment_bussiness")
  }

  booking_time_slots(){
    return this.http.get("http://127.0.0.1:8080/fetch_time_slots")
  }

  fetch_booking_appointer_details(ap_name:string){
    return this.http.get(`http://127.0.0.1:8080/fetch_booking_data_pa?email=${ap_name}`)
  }
}
