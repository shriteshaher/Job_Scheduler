import { Component, OnInit } from '@angular/core';
import { BookingServiceService } from '../booking-service/booking-service.service';

@Component({
  selector: 'app-update-availiblity',
  templateUrl: './update-availiblity.component.html',
  styleUrls: ['./update-availiblity.component.css']
})
export class UpdateAvailiblityComponent implements OnInit {
  app_data:any=[]
  constructor(private bs:BookingServiceService) { }


  addtime(time:string){
     this.bs.addBookingSlots({bussiness_name:localStorage.getItem('bussiness_name') || '',time_slots:time}).subscribe((res)=>{
     
      if(res=='The TimeSlots Is Already Add Applied'){
        // console.log(res)
        alert("The TimeSlots Is Already Added")
        
      }}
     )
    
     this.fetch_timeslots()
     setTimeout(()=>{window.location.reload()},100)
  }  

  fetch_timeslots(){
    this.bs.fetch_BookingSlots(localStorage.getItem('bussiness_name') || '').subscribe((data)=>{
      this.app_data=data
      console.log(data)
    })
  }

  delete_timeslots(timeslots:string){
     this.bs.delete_BookingSlots(localStorage.getItem('bussiness_name') || '',timeslots).subscribe()
     this.fetch_timeslots()
  }

  ngOnInit(): void {
    this.fetch_timeslots()
  }

}
