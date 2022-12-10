import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { LoginAuthenticationService } from '../servicess/login-authentication.service';

@Component({
  selector: 'app-login-signup',
  templateUrl: './login-signup.component.html',
  styleUrls: ['./login-signup.component.css']
})
export class LoginSignupComponent implements OnInit {
  t1=true
  t2=false
  bussiness_name:any
  submitted=false
  
  res:any
  registerationForm:FormGroup= this.fb.group({
    name:['',Validators.required],
    email:['',[Validators.required,Validators.email]],
    password:['',[Validators.required,Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).+$'),Validators.minLength(8)]],
    confirm_password:['',[Validators.required,Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).+$'),Validators.minLength(8)]],
    business_name:['',Validators.required],
    business_address:['',Validators.required],
    mobile_no:['',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]],

  },
    {
      validator: this.MatchPassword('password', 'confirm_password'),
    }
  )
  initialValue=this.registerationForm.value
  constructor(private fb:FormBuilder,private router:ActivatedRoute,private routernav:Router,private login_service:LoginAuthenticationService) { }
  togglings(t1:boolean,t2:boolean){
    if(t2){
      this.routernav.navigateByUrl("/SignUp/true")
      this.t1=t1
    }
    else{
    this.routernav.navigateByUrl("/login")
    this.t1=t1
    this.t2=t2
    }

  }

  onSubmit(){
    this.submitted = true;
    console.log(this.registerationForm)
  if(this.registerationForm.valid){
    let formData=this.registerationForm.value
    
    let login_table={email:formData['email'],password:formData['password'],business_name:formData['business_name'] }
    
    this.login_service.signUp(login_table).subscribe((res1)=>{

      if(res1=="Use Created"){
            this.login_service.businnes_details(formData).subscribe((data)=>{
              // console.log(data)
              
            })
            alert("User Created")
             this.routernav.navigateByUrl("/login")
            
      }
      this.res=res1
      
      // console.log(res1)
     
    },
    (err)=>{
      console.log(err)
    }
  )
  
  
    
   
  }
  
  
}

  onLogin(data:NgForm){
    this.login_service.log_in(data.value).subscribe(
      (data)=>{
        
        if(typeof data=='string')
            this.res=data
        else{
            this.res=""
            // console.log(data)
            this.routernav.navigateByUrl('/dashboard')
        }
      }
    )
   
  }

  get registerFormControl() {
    return this.registerationForm.controls;
  }

  MatchPassword(password: string, confirm_password: string) {
    return (formGroup: FormGroup) => {
      const passwordControl = formGroup.controls[password];
      const confirmPasswordControl = formGroup.controls[confirm_password];

      if(!passwordControl.value || !confirmPasswordControl.value){
        return null
      }

      if (passwordControl.value !== confirmPasswordControl.value) {
        confirmPasswordControl.setErrors({ passwordMismatch: true });
      } else {
        confirmPasswordControl.setErrors(null);
      }
      return
    }
  }

  
  ngOnInit(): void {
       
    localStorage.setItem("sign-up",'false')

    this.router.params.subscribe((param)=>{
     if(Boolean(param['boolean'])){
      this.t2=Boolean(param['boolean'])
      this.t1=false
     }
      
    })
  }

 
 
}
