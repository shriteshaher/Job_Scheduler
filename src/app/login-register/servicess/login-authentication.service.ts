import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { tokenCal } from './token';
import jwt_decode from "jwt-decode";
import { jwt_decoder_login } from './jwt_decoder';

@Injectable({
  providedIn: 'root'
})
export class LoginAuthenticationService {

  constructor(private http:HttpClient) { }

  signUp(login_data:object){
    // console.log(login_data)
   return this.http.post("http://127.0.0.1:8080/signup",login_data)  
  }

  businnes_details(registerData:object){
    return this.http.post("http://127.0.0.1:8080/bussiness_detailFill",registerData)
  }

  log_in(login_Details:object){
    // console.log(login_Details)
    return this.http.post<tokenCal>("http://127.0.0.1:8080/login",login_Details).pipe(tap((data)=>{
      // console.log(data.email)
      if(data.email)
        this.userAuthentication(data.email,data.token,data.business_name)
        
      
    }))
  }

  private userAuthentication(email:string,token:string,bussiness_name:string){
    if(email!=""){
        console.log("This")
        localStorage.setItem("email",email)
        localStorage.setItem("token",token)
        localStorage.setItem("bussiness_name",bussiness_name)
    }
  const jwtDecode:jwt_decoder_login=jwt_decode(token)
  

  }
}
