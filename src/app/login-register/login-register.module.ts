import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRegisterRoutingModule } from './login-register-routing.module';
import { LoginSignupComponent } from './login-signup/login-signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BookingDashboardComponent } from './booking-dashboard/booking-dashboard.component';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { AuthGuardService } from './servicess/auth-guard.service';
import { AppointmentModule } from '../appointment/appointment.module';
import { BookingDataComponent } from './booking-dashboard/booking-data/booking-data.component';
import { UpdateAvailiblityComponent } from './booking-dashboard/update-availiblity/update-availiblity.component';
import { InterceptoreService } from './servicess/interceptore.service';
import { TimeFormat24Pipe } from './servicess/time-format-24.pipe';

@NgModule({
  imports: [
    CommonModule,FormsModule,BrowserModule,LoginRegisterRoutingModule
    ,ReactiveFormsModule, AppointmentModule, HttpClientModule]
  ,
  declarations: [LoginSignupComponent,BookingDashboardComponent, BookingDataComponent, UpdateAvailiblityComponent,TimeFormat24Pipe],
  exports:[TimeFormat24Pipe],
  providers:[{ provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    JwtHelperService,AuthGuardService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptoreService ,
      multi: true
     }],
 
 
})
export class LoginRegisterModule { }
