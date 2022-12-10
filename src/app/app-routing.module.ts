import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { LoginRegisterModule } from './login-register/login-register.module';
import { LoginSignupComponent } from './login-register/login-signup/login-signup.component';
//npm i bootstrap@5.0.1
const routes: Routes = [{path:'home',component:HomeComponentComponent},
{
  path:'',redirectTo:'home', pathMatch: 'full'
 }

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
