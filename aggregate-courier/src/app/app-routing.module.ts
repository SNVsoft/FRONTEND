import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NavComponent } from './nav/nav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { RechargedialogComponent } from './rechargedialog/rechargedialog.component';
import { LoginbuttonComponent } from './loginbutton/loginbutton.component';
import { OrderComponent } from './order/order.component';
import { authGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { B2cComponent } from './b2c/b2c.component';
import { ProfileComponent } from './profile/profile.component';
import { WebComponent } from './web/web.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { FrontLayoutComponent } from './layout/front-layout/front-layout.component';
import { DomesticComponent } from './domestic/domestic.component';
import { InternationalComponent } from './international/international.component';
import { WarehouseComponent } from './warehouse/warehouse.component';
import { ContactComponent } from './contact/contact.component';
import { SettingsComponent } from './settings/settings.component';
import { AddonsComponent } from './addons/addons.component';
import { BillingComponent } from './billing/billing.component';
import { AboutusComponent } from './aboutus/aboutus.component';

const routes: Routes = [
  {path:'domestic',component:DomesticComponent},
  {path:'international',component:InternationalComponent},
  {path:'warehouse',component:WarehouseComponent},
  {path:'contact',component:ContactComponent},
  {path:'b2c',component:B2cComponent},
  {path:'forgetpassword',component:ForgetpasswordComponent},
  {path:'rechargedialog',component:RechargedialogComponent},
  {path:'',component:WebComponent,pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'nav',component:NavComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'register',component:RegisterComponent},
  {path:'home',component:HomeComponent},
  {path:'details',component:DetailsComponent},
  {path:'loginbutton',component:LoginbuttonComponent},
  {path:'order',component:OrderComponent},
  {path:'profile',component:ProfileComponent},
  {path:'settings',component:SettingsComponent},
  {path:'web',component:WebComponent},
  {path:'billing',component:BillingComponent},
  {path:'about-us',component:AboutusComponent},
  // {path:'admin',component:AdminLayoutComponent,children:[
  //   {path:'dashboard',loadChildren:()=>import('./views/admin/dashboard/dashboard.module').then(m=>m.DashboardModule)},
  //   {path:'loginadmin',loadChildren:()=>import('./views/admin/loginadmin/loginadmin.module').then(m=>m.LoginadminModule)}
  
  // ]},
  // {path:'',component:FrontLayoutComponent,children:[
  //   {path:'dashboard',loadChildren:()=>import('./views/user/home/home.module').then(m=>m.HomeModule)},
  //   {path:'loginuser',loadChildren:()=>import('./views/user/loginuser/loginuser.module').then(m=>m.LoginuserModule)}
  
  // ]}
  {path:'addons', component:AddonsComponent},
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
