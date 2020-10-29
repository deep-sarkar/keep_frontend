import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsComponent } from './components/components.component';
import { LoginComponent } from './components/login/login.component';
import { RouterModule } from '@angular/router';
import { Material } from './app.materials';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LogoComponent } from './components/logo/logo.component';
import { HttpService } from './services/http.service';
import { AccountService } from './services/account.service';
import { HttpClientModule } from '@angular/common/http';
import { ValidationService } from './services/validation.service';
import { UtilityService } from './services/utility.service';
import { RegisterComponent } from './components/register/register.component';



@NgModule({
  declarations: [
    AppComponent,
    ComponentsComponent,
    LoginComponent,
    LogoComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    Material,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [
    HttpService,
    AccountService,
    ValidationService,
    UtilityService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
