import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';


import { LayoutModule } from '@angular/cdk/layout';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';


import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

import { MatTreeModule } from '@angular/material/tree';

import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatBadgeModule } from '@angular/material/badge';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatCommonModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatRippleModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSliderModule } from '@angular/material/slider';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';


import { FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';
import { CdkListboxModule } from '@angular/cdk/listbox';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import {MatStepperModule} from '@angular/material/stepper';
import { RechargedialogComponent } from './rechargedialog/rechargedialog.component';
import { LoginbuttonComponent } from './loginbutton/loginbutton.component';
import {
  SocialLoginModule,
  SocialAuthServiceConfig,
} from '@abacritt/angularx-social-login';
import { GoogleLoginProvider } from '@abacritt/angularx-social-login';
import { OrderComponent } from './order/order.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { B2cComponent } from './b2c/b2c.component';
import { ProfileComponent } from './profile/profile.component';
import { WebComponent } from './web/web.component';

import { InternationalComponent } from './international/international.component';

import { ContactComponent } from './contact/contact.component';
import { SettingsComponent } from './settings/settings.component';
import { AddonsComponent } from './addons/addons.component';
import { ExceptionsComponent } from './exceptions/exceptions.component';
import { WeightrecoComponent } from './weightreco/weightreco.component';
import { BillingComponent } from './billing/billing.component';
import { ReportsComponent } from './reports/reports.component';
import { SupportsComponent } from './supports/supports.component';
import { ServicepincodesComponent } from './servicepincodes/servicepincodes.component';
import { DomesticComponent } from './domestic/domestic.component';
import { WarehouseComponent } from './warehouse/warehouse.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { BlogComponent } from './blog/blog.component';
import { B2bComponent } from './b2b/b2b.component';
import { B2cShipmentsComponent } from './b2c-shipments/b2c-shipments.component';
import { CreateTicketComponent } from './create-ticket/create-ticket.component';
import { TrainingComponent } from './training/training.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavComponent,
    DashboardComponent,
    RegisterComponent,
    HomeComponent,
    DetailsComponent,
    RechargedialogComponent,
    LoginbuttonComponent,
    OrderComponent,
    ForgetpasswordComponent,
    B2cComponent,
    ProfileComponent,
    WebComponent,
    WarehouseComponent,
    InternationalComponent,
      DomesticComponent,
    ContactComponent,
    SettingsComponent,
    AddonsComponent,
    ExceptionsComponent,
    WeightrecoComponent,
    BillingComponent,
    ReportsComponent,
    SupportsComponent,
    ServicepincodesComponent,
    AboutusComponent,
    BlogComponent,
    B2bComponent,
    B2cShipmentsComponent,
    CreateTicketComponent,
    TrainingComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SocialLoginModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,    
   HttpClientModule,
    
    LayoutModule,
    MatToolbarModule,
    MatStepperModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatTreeModule,
    MatProgressBarModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonToggleModule,
    MatCheckboxModule,
    MatChipsModule,
    MatCommonModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatSnackBarModule,
    MatTabsModule,
    MatTooltipModule,
    FormsModule,
    ReactiveFormsModule,
    CdkListboxModule,
    FormsModule,
   
  ],
  providers: [
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
