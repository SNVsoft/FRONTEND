import { Component, inject } from '@angular/core';
import { AuthService } from '../auth.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, map, shareReplay } from 'rxjs';
import { NavbarService } from '../navbar.service';
import { Navbar2Service } from '../navbar2.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  json:string="null";
data!:any;
constructor( public auth:AuthService,public nav: NavbarService,public nav1: Navbar2Service,){

}
private breakpointObserver = inject(BreakpointObserver);
isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
.pipe(
  map(result => result.matches),
  shareReplay()
);

ngOnInit(){
  this.getProfile();
  this.nav.hide();
  this.nav1.show();
 
}

getProfile(){
this.auth.getProfile().subscribe((res)=>{
  res.set('Access-Control-Allow-Origin', 'http://localhost:8080');
  if(res.success){
    this.data = res.data;
    console.log(this.data);
    
  }
},(err:any)=>{
  console.log(err)
})
} 

}

