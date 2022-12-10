import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from "@auth0/angular-jwt";

const helper = new JwtHelperService();

@Component({
  selector: 'app-booking-dashboard',
  templateUrl: './booking-dashboard.component.html',
  styleUrls: ['./booking-dashboard.component.css']
})
export class BookingDashboardComponent implements OnInit {
  t1=true
  timeout:any
  bussiness_name:any
  constructor(private router:Router) { }
  toggle(t1:boolean){
    this.t1=t1
    
  }
  ngOnInit(): void {
   
   if(localStorage.getItem('bussiness_name')){
     this.bussiness_name=localStorage.getItem('bussiness_name')
     this.autoLogout()
   }
  else{
      this.router.navigateByUrl('/login')
  }
  }
    
  ngOnDestroy(){
       
  }

  logOut(){
    localStorage.clear();
    clearTimeout(this.timeout)
    this.router.navigateByUrl('/login')
  }

  autoLogout(){
    const jwtDecode:any=helper.getTokenExpirationDate(localStorage.getItem('token') || undefined)
    const timeoutexp =jwtDecode.getTime() - Date.now();
    this.timeout= setTimeout(()=>{
      localStorage.clear();
      alert("Please Relogin Session Is Expired")
    this.router.navigateByUrl('/login')
    },timeoutexp)
  }

}
