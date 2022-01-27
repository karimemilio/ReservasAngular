import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";

@Component({
  selector: "app-newservice",
  templateUrl: "./newservice.component.html",
  styleUrls: ["./newservice.component.css"]
})
export class NewserviceComponent {
  email: any;
  password: any;

  constructor(private http: HttpClient) {}

  login() {
    console.log(this.email);
    console.log(this.password);
    this.http.get('https://jsonplaceholder.typicode.com/todos/1').subscribe(data => {
      console.log(data);
    });
  }
}