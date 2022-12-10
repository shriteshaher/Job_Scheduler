import { Component, ElementRef, OnInit } from '@angular/core';
import { AuthGuardService } from './login-register/servicess/auth-guard.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  data:any
  dt:boolean=false
  title = 'Job_Scheduler';
  constructor(public authService:AuthGuardService){
     
  }
  
  
  ngOnInit(): void {
    
    
    
  }

   ngOnDestroy(){
    console.log("The Methode Is Called")
    // this.hide=this.authService.isAuthenticated()
    // console.log("This:"+this.authService.isAuthenticated())
  }
  
 
}
