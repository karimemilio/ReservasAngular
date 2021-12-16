import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  name: any;
  email: any;
  password: any;

  constructor() { }

  ngOnInit(): void {
  }
  
  register() {
    console.log(this.name);
    console.log(this.email);
    console.log(this.password);
  }

}
