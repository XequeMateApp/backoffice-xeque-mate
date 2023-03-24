import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserAuthenticatedDto } from 'src/app/dto/auth/user-authenticated.dto';
import { AuthenticationService } from 'src/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  form: FormGroup;
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private authService: AuthenticationService,
  ) {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    })
  }

  ngOnInit(): void {
  }

  handlePasswordRecovery() {
    this.router.navigate(['auth/send-email']);
  }

  confirm() {
    this.authService.authenticate(this.form.value).subscribe({
      next: data => {
        this.authService.setAuthenticatedUser(new UserAuthenticatedDto(data.email, data.token));
        this.router.navigate(['logged/dashboard']);
      },
      error: error => {
        this.toastrService.error('erro ao realizar login / Email ou senha inválidos', '', { progressBar: true })
      }
    })
  }
}
