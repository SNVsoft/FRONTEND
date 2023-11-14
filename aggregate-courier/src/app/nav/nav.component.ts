import { Component, OnInit, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { RechargedialogComponent } from '../rechargedialog/rechargedialog.component';
import { NavbarService } from '../navbar.service';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { Navbar2Service } from '../navbar2.service';
export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  private breakpointObserver = inject(BreakpointObserver);

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
    constructor(public dialog: MatDialog, public nav: NavbarService,public nav1: Navbar2Service,private auth:AuthService,private router:Router) {}
    ngOnInit() {
      this.nav.show();
      this.nav1.hide();
     
    }
    onLogout(){
      this.auth.logout();
      this.router.navigateByUrl('/')
    }

  openDialog() {
    this.dialog.open(RechargedialogComponent);
  }
  url = '';
  onSelectFile(event:any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event:any) => { // called once readAsDataURL is completed
        this.url = event.target.result;
      }
    }
  }
}
