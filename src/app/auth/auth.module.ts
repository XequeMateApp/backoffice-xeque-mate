import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SendEmailComponent } from './send-email/send-email.component';
import { ConfirmPasswordComponent } from './confirm-password/confirm-password.component';
import { ConfirmCodeComponent } from './2fa/confirm-code/confirm-code.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthRouteModule } from './auth-route';
import { AppComponent } from '../app.component';
import { AuthComponent } from './auth.component';




@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    SendEmailComponent,
    ConfirmPasswordComponent,
    ConfirmCodeComponent,
  ],
  imports: [
    CommonModule,
    NgbModule,
    AuthRouteModule,
    FormsModule,
    ReactiveFormsModule,
  ], 
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  bootstrap:[AppComponent]
})
export class AuthModule { }
