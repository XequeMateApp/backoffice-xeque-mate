import { CommonModule } from "@angular/common";
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { LoggedComponent } from "./logged.component";
import { LoggedRouteModule } from "./logged.router";
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';
import { NgxPageScrollModule } from 'ngx-page-scroll';
import { NgxPaginationModule } from "ngx-pagination";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { NgxStarsModule } from "ngx-stars";
import { NavbarComponent } from "../shared/navbar/navbar.component";
import { NotificationComponent } from './notification/notification.component';
import { CreateNotificationComponent } from './notification/components/create-notification/create-notification.component';
import { EditNotificationComponent } from './notification/components/edit-notification/edit-notification.component';
import { DeleteNotificationComponent } from './notification/components/delete-notification/delete-notification.component';
import { KycManagerComponent } from './kyc-manager/kyc-manager.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { SupplierComponent } from './supplier/supplier.component';
import { ValidateSupplierComponent } from './supplier/components/validate-supplier/validate-supplier.component';
import { NgxMaskModule } from "ngx-mask";
import { SuppliersCustomersComponent } from './suppliers-customers/suppliers-customers.component';
import { EditSupplierCustomersClientComponent } from './suppliers-customers/components/edit-supplier-customers-client/edit-supplier-customers-client.component';
import { EditSupplierCustomersComponent } from './suppliers-customers/components/edit-supplier-customers/edit-supplier-customers.component';
import { CloseSupplierCustomersComponent } from './suppliers-customers/components/close-supplier-customers/close-supplier-customers.component';
import { CloseSupplierCustomersClientComponent } from './suppliers-customers/components/close-supplier-customers-client/close-supplier-customers-client.component';
import { Ng2SearchPipeModule } from "ng2-search-filter";
import { FunctionManagementComponent } from './function-management/function-management.component';
import { CreateFunctionComponent } from './function-management/components/create-function/create-function.component';
import { EditFunctionComponent } from './function-management/components/edit-function/edit-function.component';
import { DeleteFunctionComponent } from './function-management/components/delete-function/delete-function.component';
import { ProductsComponent } from './products/products.component';
import { AnalysisProductComponent } from './products/components/analysis-product/analysis-product.component';
import { CreateProductComponent } from './products/components/create-product/create-product.component';
import { EditProductComponent } from './products/components/edit-product/edit-product.component';
import { DeleteProductComponent } from './products/components/delete-product/delete-product.component';
import { CreateUserComponent } from './user-management/components/create-user/create-user.component';
import { EditUserComponent } from './user-management/components/edit-user/edit-user.component';
import { ConfirUserComponent } from './user-management/components/confir-user/confir-user.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserPasswordComponent } from './user-profile/components/user-password/user-password.component';
import { CategorysComponent } from './categorys/categorys.component';
import { CreateCategoryComponent } from './categorys/components/create-category/create-category.component';
import { EditCategoryComponent } from './categorys/components/edit-category/edit-category.component';
import { DeleteCategoryComponent } from './categorys/components/delete-category/delete-category.component';
import { MarketingComponent } from './marketing/marketing.component';
import { CreateAdComponent } from './marketing/components/create-ad/create-ad.component';
import { EditAdComponent } from './marketing/components/edit-ad/edit-ad.component';
import { DeleteAdComponent } from './marketing/components/delete-ad/delete-ad.component';
import { NgApexchartsModule } from "ng-apexcharts";

import { BlockedUsersComponent } from './blocked-users/blocked-users.component';

import { UnityComponent } from './unity/unity.component';
import { EditUnityComponent } from './unity/edit-unity/edit-unity.component';
import { DeleteUnityComponent } from './unity/delete-unity/delete-unity.component';



@NgModule({
  declarations: [
    LoggedComponent,
    DashboardComponent,
    NavbarComponent,
    NotificationComponent,
    CreateNotificationComponent,
    EditNotificationComponent,
    DeleteNotificationComponent,
    KycManagerComponent,
    UserManagementComponent,
    SupplierComponent,
    ValidateSupplierComponent,
    SuppliersCustomersComponent,
    EditSupplierCustomersClientComponent,
    EditSupplierCustomersComponent,
    CloseSupplierCustomersComponent,
    CloseSupplierCustomersClientComponent,
    FunctionManagementComponent,
    CreateFunctionComponent,
    EditFunctionComponent,
    DeleteFunctionComponent,
    ProductsComponent,
    AnalysisProductComponent,
    CreateProductComponent,
    EditProductComponent,
    DeleteProductComponent,
    CreateUserComponent,
    EditUserComponent,
    ConfirUserComponent,
    UserProfileComponent,
    UserPasswordComponent,
    CategorysComponent,
    CreateCategoryComponent,
    EditCategoryComponent,
    DeleteCategoryComponent,
    MarketingComponent,
    CreateAdComponent,
    EditAdComponent,
    DeleteAdComponent,
    BlockedUsersComponent,
    UnityComponent,
    EditUnityComponent,
    DeleteUnityComponent,

  ],
  imports: [
    CommonModule,
    LoggedRouteModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPageScrollModule,
    NgxMaskModule.forRoot(),
    NgxPageScrollCoreModule,
    NgxPaginationModule,
    NgbModule,
    Ng2SearchPipeModule,
    NgxStarsModule,
    NgApexchartsModule,
  ],
  providers: [],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],

})
export class LoggedModule { }
