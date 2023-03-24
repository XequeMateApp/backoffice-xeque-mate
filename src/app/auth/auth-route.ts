import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
const routesAuth: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: 'forgot-password',
        component: ForgotPasswordComponent,
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routesAuth)],
  exports: [RouterModule],
})
export class AuthRouteModule { }