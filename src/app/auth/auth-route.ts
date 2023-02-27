import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConfirmCodeComponent } from './2fa/confirm-code/confirm-code.component';
import { AuthComponent } from './auth.component';
import { ConfirmPasswordComponent } from './confirm-password/confirm-password.component';
import { SendEmailComponent } from './send-email/send-email.component';
const routesAuth: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
     
      {
        path: 'send-email',
        component: SendEmailComponent,
      },
      {
        path: 'confirm-password',
        component: ConfirmPasswordComponent,
      },
      {
        path: 'confirm-code',
        component: ConfirmCodeComponent,
      },
    ],
  },
];
@NgModule({
    imports: [RouterModule.forChild(routesAuth)],
    exports: [RouterModule],
})
export class AuthRouteModule {}