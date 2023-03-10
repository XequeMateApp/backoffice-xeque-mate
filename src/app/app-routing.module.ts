import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'pages',
    loadChildren: () =>
      import('./logged/logged.module')
        .then(a => a.LoggedModule)
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./auth/auth.module')
        .then(a => a.AuthModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
