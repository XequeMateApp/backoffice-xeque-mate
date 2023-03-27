import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  stepOne: boolean = true;
  stepTwo: boolean = false;
  stepThree: boolean = false;

  formOne: FormGroup;
  formTwo: FormGroup;
  formThree: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
  ) {
    this.formOne = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    })
    this.formTwo = this.formBuilder.group({
      code: ['']
    })
    this.formThree = this.formBuilder.group({
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]]
    })
  }

  ngOnInit(): void {
  }

  confirmStepOne() {
    this.stepOne = false;
    this.stepTwo = true;
  }

  confirmStepTwo() {
    this.stepTwo = false;
    this.stepThree = true;
  }

  goBackStepOne() {
    this.stepOne = true;
    this.stepTwo = false;
  }

  backHome() {
    this.router.navigate(['/']);
  }

  confirmPasswordChange() {
    this.router.navigate(['/']);
  }
}
