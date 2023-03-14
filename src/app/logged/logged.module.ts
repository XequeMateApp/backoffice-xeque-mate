import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
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
    ],
    providers: [],
    // schemas: [
    //     CUSTOM_ELEMENTS_SCHEMA,
    //     NO_ERRORS_SCHEMA
    // ],

})
export class LoggedModule { }