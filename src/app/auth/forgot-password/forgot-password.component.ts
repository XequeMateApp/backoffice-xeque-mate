import { Component, OnInit } from '@angular/core';
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

  constructor(
    private router: Router
  ) { }

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
