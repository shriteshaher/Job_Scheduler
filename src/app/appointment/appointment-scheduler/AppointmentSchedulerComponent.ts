import { Component, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { CalendarOptions, FullCalendarComponent } from '@fullcalendar/angular';
import { formatDate } from '@angular/common';
import { ApplyAppointmentService } from '../servicess/apply-appointment.service';
import { ignoreElements } from 'rxjs';

@Component({
  selector: 'app-appointment-scheduler',
  templateUrl: './appointment-scheduler.component.html',
  styleUrls: ['./appointment-scheduler.component.css']
})

export class AppointmentSchedulerComponent implements OnInit {
  t1=true
  t2=false 
  st="none"
  submitted=false
  dt:any=[]
  res:any
  resultSearch:any
  searchResult:any=[]
  bussiness_names:any=[]
  bussiness_time:any=[]
  bussiness_time1:any=[]
  BookAppointment:FormGroup=new FormGroup({})
  forbiddenValues=["Appointer Name","Appoinment Time"]
 

  updateSt(dt:string){
     this.st=dt
  }
  constructor(private fb:FormBuilder,private book_appointment:ApplyAppointmentService) { 
    this.BookAppointment=this.fb.group({
      name:[,[Validators.required]],
      appointment_business_booking :["Appointer Name",this.isForbidden(this.forbiddenValues)],
      email:[,[Validators.required,Validators.email]],
      mobile_no:[,[Validators.required,Validators.pattern('[0-9]+'),Validators.minLength(10),Validators.maxLength(10)]],
      address:[,Validators.required],
      booked_time:["Appoinment Time",this.isForbidden(this.forbiddenValues)],
      booked_date:[formatDate(new Date(), 'yyyy-MM-dd', 'en'),Validators.required],
    })
   }
  
   searchApStatus(ap_name:string){
    this.searchResult=[]
    this.resultSearch=""
    this.book_appointment.fetch_booking_appointer_details(ap_name).subscribe(
      res=> { if(res=="The Data Not Found"){
          this.resultSearch=res
      }
        this.searchResult=res
      }
    )
   }
   
   
   onSubmit(){
    this.submitted=true
    if(this.BookAppointment.valid){
      console.log("This",this.BookAppointment.value)
      this.book_appointment.apply_Appointment(this.BookAppointment.value).subscribe(
        (res)=>{
          this.res=res
          console.log(res)
        }
      )
      setTimeout(()=>window.location.reload(),500)
      
    }
    
   }

  toggle(t1:boolean,t2:boolean){
      this.t1=t1
      this.t2=t2
  }

   isForbidden(forbiddenValues: string[]): ValidatorFn {
    return (c: AbstractControl): { [key: string]: boolean } | null => {
      if (forbiddenValues.indexOf(c.value) !== -1) {
        return { 'forbiddenValues': true };
      }
      return null;
    };
  }

  get BookingFormControls() {
    return this.BookAppointment.controls;
  }

  filterAccordingBusinessName(flval:string){
    console.log(flval)
    console.log(this.bussiness_time)
    this.bussiness_time1=[]
    this.bussiness_time=this.bussiness_time.filter(
      (val:any)=>{
          if(val.bussiness_name==flval){
            this.bussiness_time1.push(val.timeslots  )
            
          }
          return val
      }
    )
    console.log(this.bussiness_time1)
  }
  
  ngOnInit(): void {
    this.book_appointment. booking_appointer_details_bs().subscribe(
      (data)=>{
         this.bussiness_names=data
      }
    )
  

  this.book_appointment.booking_time_slots().subscribe(
    (data)=>{
      this.bussiness_time=data
    })
   
}



}
