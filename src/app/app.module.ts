import { routing } from "./app-routing.module";
import { BrowserModule } from "@angular/platform-browser";
import { Injectable, NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';

import { AppComponent } from "./app.component";
import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ServicesComponent } from './components/services/services.component';

import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { NewserviceComponent } from "./components/newservice/newservice.component";
import { LoginService } from "./services/login/login.service";
import { EditServiceComponent } from "./components/editService/editService.component";
import { EditUserComponent } from "./components/editUser/editUser.component";

// import { AuthGuard } from "./services/guard/authguard.service";
// import { DataSharingService } from "./services/datasharing/datasharing.service";
// import { LoginService } from "./services/login/login.service";


@NgModule({
  declarations: [AppComponent, LoginComponent, RegisterComponent, NavbarComponent, HomeComponent, ServicesComponent, NewserviceComponent, EditServiceComponent,EditUserComponent],
  imports: [BrowserModule, routing, FormsModule, HttpClientModule],
  providers: [LoginService],
  bootstrap: [AppComponent]
})

export class AppModule {
}