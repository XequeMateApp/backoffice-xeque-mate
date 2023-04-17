import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthRouteModule } from './auth-route';
import { AppComponent } from '../app.component';
import { AuthComponent } from './auth.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { FirstAccessComponent } from './first-access/first-access.component';

@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    ForgotPasswordComponent,
    FirstAccessComponent,
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
  bootstrap: [AppComponent]
})
export class AuthModule { }
