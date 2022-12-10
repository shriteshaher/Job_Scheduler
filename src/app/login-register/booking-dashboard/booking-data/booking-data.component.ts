import { Component, OnInit } from '@angular/core';
import { BookingServiceService } from '../booking-service/booking-service.service';

@Component({
  selector: 'app-booking-data',
  templateUrl: './booking-data.component.html',
  styleUrls: ['./booking-data.component.css']
})
export class BookingDataComponent implements OnInit {
   data:any=[];
  
  constructor(private bk:BookingServiceService){
     
   }

   seachAppointmentsName(search:string){
      console.log(search)
       if(search==''){
        this.showData()
        return
       }

       this.data=this.data.filter((val:any)=>{
        if(val.name==search){
          return val
        }
       })
       console.log(this.data)
       

   }

   showData(){
    let str=localStorage.getItem('bussiness_name')
    this.bk.fetch_Booking(str ||'').subscribe(
      (data1)=>{
         console.log(data1)
         this.data=data1
         console.log("This:",data1)
      }
    )
  }

   updateStatus(bs_name:string,data:string,name:string){
    this.bk.update_Booking(bs_name,data,name).subscribe(
      
      (data)=>{
        this.showData()
        // window.location.reload();
      }
    )

    
    console.log("Edge")
    window.location.reload();

    
   }

  ngOnInit(): void {
   
    // console.log("This:",str,localStorage.getItem(' bussiness_name'))
    this.showData()
   
  }
  
  
}
