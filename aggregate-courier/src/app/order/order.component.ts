import { Component } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import {NgIf} from '@angular/common';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent {
 

 value= uuidv4();


 selected = new FormControl('valid', [Validators.required, Validators.pattern('valid')]);

 selectFormControl = new FormControl('valid', [Validators.required, Validators.pattern('valid')]);

 nativeSelectFormControl = new FormControl('valid', [
   Validators.required,
   Validators.pattern('valid'),
 ]);

 matcher = new MyErrorStateMatcher();
 disableSelect = new FormControl(false);
}
