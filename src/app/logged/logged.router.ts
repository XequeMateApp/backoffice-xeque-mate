import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { KycManagerComponent } from "./kyc-manager/kyc-manager.component";
import { LoggedComponent } from "./logged.component";
import { NotificationComponent } from "./notification/notification.component";

const routerConfig: Routes = [
  {
    path: 'logged',
    component: LoggedComponent,
    children: [
      {
        path: 'dashboard', component: DashboardComponent
      },
      {
        path: 'notification', component: NotificationComponent
      },
      {
        path: 'kyc', component: KycManagerComponent
      }
    ],
  }
]
@NgModule({
  imports: [RouterModule.forChild(routerConfig)],
  exports: [RouterModule],
})
export class LoggedRouteModule { }