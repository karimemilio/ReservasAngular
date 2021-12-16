import { Component } from "@angular/core";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent {
  email: any;
  password: any;

  constructor() {}

  login() {
    console.log(this.email);
    console.log(this.password);
  }
}