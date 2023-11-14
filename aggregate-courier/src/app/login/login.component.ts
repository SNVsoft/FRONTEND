import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { ForgetpasswordComponent } from '../forgetpassword/forgetpassword.component';
import { MatDialog } from '@angular/material/dialog';
import { NavbarService } from '../navbar.service';
import { Navbar2Service } from '../navbar2.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit{

  hide = true;
 
 loginForm!:FormGroup
 
 constructor(private fb:FormBuilder,private auth:AuthService,private router:Router,public dialog: MatDialog,public nav: NavbarService,public nav1: Navbar2Service,){
  this.loginForm = this.fb.group({
    "email":["",Validators.required],
    "password":["",Validators.required]
  })
 }
 ngOnInit() {
  this.nav.show();
  this.nav1.hide();
 
}
  login(){
    const data = this.loginForm.value;
    this.auth.signin(data).subscribe((res:any)=>{
      if(res.success){
        localStorage.setItem('token', res.token);
      
      alert(res.message);
      this.router.navigateByUrl('/home')
    }else{
      alert(res.message);
    }
    }),(err:any) =>{
     alert(`login failed`)
    }
  
  }
 
  openDialog() {
    const dialogRef = this.dialog.open(ForgetpasswordComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
