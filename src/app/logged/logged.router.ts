import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { KycManagerComponent } from "./kyc-manager/kyc-manager.component";
import { LoggedComponent } from "./logged.component";
import { NotificationComponent } from "./notification/notification.component";
import { SupplierComponent } from "./supplier/supplier.component";
import { UserManagementComponent } from "./user-management/user-management.component";
import { SuppliersCustomersComponent } from "./suppliers-customers/suppliers-customers.component";
import { FunctionManagementComponent } from "./function-management/function-management.component";
import { ProductsComponent } from "./products/products.component";
import { UserProfileComponent } from "./user-profile/user-profile.component";
import { CategorysComponent } from "./categorys/categorys.component";
import { MarketingComponent } from "./marketing/marketing.component";
import { UnityComponent } from "./unity/unity.component";
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
        path: 'marketing', component: MarketingComponent
      },
      {
        path: 'user-profile', component: UserProfileComponent
      },
      {
        path: 'supplier', component: SupplierComponent
      },
      {
        path: 'user-manegement', component: UserManagementComponent
      },
      {
        path: 'categorys', component: CategorysComponent
      },
      {
        path: 'suppliers-customers', component: SuppliersCustomersComponent
      },
      {
        path: 'function-management', component: FunctionManagementComponent
      },
      {
        path: 'kyc', component: KycManagerComponent
      },
      {
        path: 'products', component: ProductsComponent
      },
      {
        path: 'unity', component: UnityComponent
      }
    ],
  }
]
@NgModule({
  imports: [RouterModule.forChild(routerConfig)],
  exports: [RouterModule],
})
export class LoggedRouteModule { }
