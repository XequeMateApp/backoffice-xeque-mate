import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/services/user.service';

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
    private userService: UserService,
    private toastrService: ToastrService,
  ) {
    this.formOne = this.formBuilder.group({
      email: ['', [Validators.email]]
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

  goBackStepOne() {
    this.stepOne = true;
    this.stepTwo = false;
  }

  backHome() {
    this.router.navigate(['/']);
  }

  confirmSendEmail() {
    let request = {
      email: this.formOne.controls['email'].value
    }
    console.log(request);

    this.userService.resetPasswordVerification(request).subscribe({
      next: data => {
        console.log(data);
        this.stepOne = false;
        this.stepTwo = true;
      },
      error: error => {
        console.log(request);
        this.toastrService.error('Email inválido!', '', { progressBar: true });
      }
    })
  }

  confirmSendCode() {
    let requestEmail = this.formOne.controls['email'].value;
    let requestCode = this.formTwo.controls['code'].value;

    this.userService.verifyCode(requestCode, requestEmail).subscribe({
      next: data => {
        if (this.formTwo.controls['code'].value !== '') {
          this.stepTwo = false;
          this.stepThree = true;
        } else {
          this.toastrService.error('Preencha o codigo completo!', '', { progressBar: true })
        }
      },
      error: error => {
        this.toastrService.error('Email inválido!', '', { progressBar: true })
      }
    })

  }

  confirmNewPassword() {
    let requestPassword = {
      email: this.formOne.controls['email'].value,
      code: this.formTwo.controls['code'].value,
      newPassword: this.formThree.controls['password'].value
    }

    this.userService.updatePassword(requestPassword).subscribe({
      next: data => {
        if (this.formThree.controls['password'].value !== '' && this.formThree.controls['confirmPassword'].value !== '') {
          this.toastrService.success('Senha alterada com sucesso!', '', { progressBar: true })
          this.router.navigate(['/']);
        } else {
          this.toastrService.error('Preencha os campos de senha!', '', { progressBar: true })
        }
      }, error: error => {
        this.toastrService.error('Erro ao atualizar a senha!', '', { progressBar: true })
      }

    })

  }
}
