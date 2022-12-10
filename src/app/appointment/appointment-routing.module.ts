import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppointmentSchedulerComponent } from './appointment-scheduler/AppointmentSchedulerComponent';

const routes: Routes = [{
  path:'appointment',component: AppointmentSchedulerComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppointmentRoutingModule { }
