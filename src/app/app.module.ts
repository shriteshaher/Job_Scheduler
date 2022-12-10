import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginRegisterModule } from './login-register/login-register.module';
import { BookingDashboardComponent } from './login-register/booking-dashboard/booking-dashboard.component';
import { AuthGuardService } from './login-register/servicess/auth-guard.service';

import { AppointmentModule } from './appointment/appointment.module';
import { HomeComponentComponent } from './home-component/home-component.component';
import { TimeFormat24Pipe } from './login-register/servicess/time-format-24.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent
    
  ],
  imports: [
    LoginRegisterModule,
    AppointmentModule,
    BrowserModule,
    CommonModule,
    AppRoutingModule,
   
  ],
  providers: [AuthGuardService],
  exports:[],
  bootstrap: [AppComponent],
 
})
export class AppModule { }
