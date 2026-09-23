import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private _AuthService:AuthService, private _Router:Router){}
  msgError:string='';
  registerForm:FormGroup= new FormGroup({
    name: new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(20)]),
    email: new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('',[Validators.required,Validators.pattern(/^[A-Z][a-z0-9]{5,9}$/)]),
    rePassword: new FormControl('',[Validators.required,Validators.pattern(/^[A-Z][a-z0-9]{5,9}$/)]),
    phone: new FormControl('',[Validators.required,Validators.pattern(/^01[0125][0-9]{8}$/)]),
  })

  handleForm(){
    if(this.registerForm.valid){
      this._AuthService.setRegister(this.registerForm.value).subscribe({
      next:(response)=>{
        console.log(response);
        if(response.message =='success'){
        this._Router.navigate(['/login'])
        }
      },
      error:(error)=>{
        console.log(error.error);
console.log(error.error.errors);
        this.msgError=error.error.message;
      }
    })
    }
  
  }
}
