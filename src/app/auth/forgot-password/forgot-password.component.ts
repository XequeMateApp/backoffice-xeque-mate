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

  confirmSendEmail() {
    let request = {
      email: this.formOne.controls['email'].value
    }
    this.userService.resetPasswordVerification(request).subscribe({
      next: data => {
        console.log(data);
        this.stepOne = false;
        this.stepTwo = true;
      },
      error: error => {
        this.toastrService.error('Email inválido!', '', { progressBar: true });
      }
    })
  }

  // confirmSendCode() {
  //   let requestEmail = this.form.controls['email'].value
  //   let requestCode = this.form.controls['code1'].value + this.form.controls['code2'].value + this.form.controls['code3'].value + this.form.controls['code4'].value + this.form.controls['code5'].value + this.form.controls['code6'].value;

  //   this.userService.verifyCode(requestCode, requestEmail).subscribe({
  //     next: data => {

  //       if (this.form.controls['code1'].value !== '' && this.form.controls['code2'].value !== '' && this.form.controls['code3'].value !== '' && this.form.controls['code4'].value !== '' && this.form.controls['code5'].value !== '' && this.form.controls['code5'].value !== '' && this.form.controls['code6'].value !== '') {
  //         this.sendEmail = false;
  //         this.sendCode = false;
  //         this.forgotPassword = true;
  //         let personalDataBorder = document.getElementById('borda-botao-credentials');
  //         personalDataBorder.classList.remove('border-button-step-register-disabled');
  //         personalDataBorder.classList.add('border-button-step-register-active');

  //         console.log("aqui");

  //       } else {
  //         this.toastrService.error('Preencha o codigo completo!', '', { progressBar: true })
  //       }
  //     },
  //     error: error => {
  //       this.toastrService.error('Email inválido!', '', { progressBar: true })
  //     }
  //   })

  // }

  // confirmNewPassword() {
  //   let requestPassword = {
  //     email: this.form.controls['email'].value,
  //     code: this.form.controls['code1'].value + this.form.controls['code2'].value + this.form.controls['code3'].value + this.form.controls['code4'].value + this.form.controls['code5'].value + this.form.controls['code6'].value,
  //     newPassword: this.form.controls['newPassword'].value
  //   }

  //   this.userService.updatePassword(requestPassword).subscribe({
  //     next: data => {
  //       if (this.form.controls['password'].value !== '' && this.form.controls['newPassword'].value !== '') {
  //         this.toastrService.success('Senha alterada com sucesso!', '', { progressBar: true })
  //         this.router.navigate(['/']);
  //       } else {
  //         this.toastrService.error('Preencha os campos de senha!', '', { progressBar: true })
  //       }
  //     }, error: error => {
  //       this.toastrService.error('Erro ao atualizar a senha!', '', { progressBar: true })
  //     }

  //   })

  // }
}
