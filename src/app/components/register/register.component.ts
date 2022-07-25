import { Component } from '@angular/core';
import { FormControl, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  firstFormGroup = this._formBuilder.group({
    gcan: ['', Validators.required],
    name: ['', Validators.required],
    phone: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    password: ['', Validators.required],
    confirmPassword: ['', Validators.required],
  });
  thirdFormGroup = this._formBuilder.group({
    code: ['', Validators.required],
  });

  email = new FormControl('', [Validators.required, Validators.email]);
  hide = true; // show hide password field

  constructor(
    public dialogRef: MatDialogRef<RegisterComponent>,
    private _formBuilder: FormBuilder
  ) {}

  getErrorMessage() {
    if (this.email.hasError('required')) 
      return 'You must enter a value';

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
