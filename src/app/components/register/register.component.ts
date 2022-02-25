import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { LoginService } from "src/app/services/login/login.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  name: any;
  email: any;
  password: any;
  user: any;
  urlRegister = 'http://localhost:8080/ttps-spring/api/newUsuario';


  constructor(private http: HttpClient, private authService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }
  
  register() {
    this.http.post<any>(this.urlRegister,{
      "mail": this.email,
      "password":this.password  ,
      "nombre":this.name 
  }).subscribe( user => this.user = user,
      err => alert ("Ya existe un usuario con su mail"),
      () => { this.authService.setUserLoggedIn(this.user)
      this.router.navigate(['/index']);
    }
   )
  }

}
