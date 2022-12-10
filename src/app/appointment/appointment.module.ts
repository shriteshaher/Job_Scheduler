import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppointmentRoutingModule } from './appointment-routing.module';
import { AppointmentSchedulerComponent } from "./appointment-scheduler/AppointmentSchedulerComponent";

import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import timeGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

import { ReactiveFormsModule } from '@angular/forms';
import { ApplyAppointmentService } from './servicess/apply-appointment.service';

import { LoginRegisterModule } from '../login-register/login-register.module';
import { BrowserModule } from '@angular/platform-browser';
import { TimeFormat24Pipe } from './servicess/time-format-24.pipe';

FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  interactionPlugin,
  timeGridPlugin
]);

@NgModule({
  imports: [
    ReactiveFormsModule,
    CommonModule,AppointmentRoutingModule
  ],
  declarations: [AppointmentSchedulerComponent,TimeFormat24Pipe],
  providers:[ ApplyAppointmentService]
})
export class AppointmentModule { }
