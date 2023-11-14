import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  checked = false;
  hide = true;
  signupform!:FormGroup;
  constructor( private cv:FormBuilder,private auth:AuthService){
   this.signupform =this.cv.group({
    name:["",Validators.required],
    email:["",Validators.required],
    mobile:["",Validators.required],
    password:["",Validators.required],
    companyname:["",Validators.required],
   })

  }
  signup(){
  const data = this.signupform.value;
  delete data['confirm'];
  this.auth.signup(data).subscribe((res:any)=>{
     alert('user register successfully')
  })
      
      
    }
  }

