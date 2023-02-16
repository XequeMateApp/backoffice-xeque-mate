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

@NgModule({
    declarations: [
        LoggedComponent,
        DashboardComponent,
    ],
    imports: [
        CommonModule,
        LoggedRouteModule,
        FormsModule,
        ReactiveFormsModule,
        NgxPageScrollModule,
        NgxPageScrollCoreModule,
        NgxPaginationModule,
        NgbModule,
        NgxStarsModule,
    ],
    providers: [],

})
export class LoggedModule { }