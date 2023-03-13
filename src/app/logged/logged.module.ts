import { CommonModule } from "@angular/common";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
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
        NgxStarsModule,
    ],
    providers: [],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
        NO_ERRORS_SCHEMA
    ],

})
export class LoggedModule { }