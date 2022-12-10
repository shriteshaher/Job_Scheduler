import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingDashboardComponent } from './booking-dashboard/booking-dashboard.component';
import { BookingDataComponent } from './booking-dashboard/booking-data/booking-data.component';
import { UpdateAvailiblityComponent } from './booking-dashboard/update-availiblity/update-availiblity.component';

import { LoginSignupComponent } from './login-signup/login-signup.component';
import { AuthGuardService } from './servicess/auth-guard.service';

const routes: Routes = [{path:'login',component:LoginSignupComponent},
{path:'SignUp/:boolean',component:LoginSignupComponent},
{path:'dashboard',component:BookingDashboardComponent,canActivate:[AuthGuardService],
children:[{
  path:'appointment-data',component:BookingDataComponent},
  {path:'update-availiblity',component:UpdateAvailiblityComponent},
{path:'',redirectTo:'appointment-data',pathMatch: 'full'}]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRegisterRoutingModule { }
