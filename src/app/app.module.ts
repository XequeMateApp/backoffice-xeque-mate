import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToastrModule } from 'ngx-toastr';
import { NgxMaskModule } from 'ngx-mask';
import { LoggedModule } from './logged/logged.module';
import { HttpClientModule } from '@angular/common/http';
import { AuthModule } from './auth/auth.module';
import { NgxSelectModule } from 'ngx-select-ex';


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    NgxSelectModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AuthModule,
    LoggedModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    NgxMaskModule.forRoot(),
    HttpClientModule

  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
