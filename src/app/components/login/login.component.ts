import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { User } from "src/app/models/user.model";
import { LoginService } from "src/app/services/login/login.service";
import { HttpHeaders } from '@angular/common/http';


const httpOptions = {
  headers: new HttpHeaders({
  'Content-Type': 'application/json'
  })
 };


@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})

export class LoginComponent {
  email: any;
  password: any;
  usuarioValido: any;
  user: any;
  urlAutentificar = 'http://localhost:8080/ttps-spring/api/autentificarUsuario';

  constructor(private http: HttpClient, private authService: LoginService, private router: Router ) {}

  login() {

    this.http.post<any>(this.urlAutentificar,{
      "email": this.email,
      "password":this.password   
  }).subscribe( user => this.user = user,
      error => alert ("El usuario es invalido "),
      () => {this.usuarioValido = true,
      console.log('Se está logueando');
      this.authService.setUserLoggedIn(this.user)
      sessionStorage.setItem('userId',this.user.id)
      sessionStorage.setItem('email',this.user.mail)
      sessionStorage.setItem('nombre',this.user.nombre)
      this.router.navigate(['/index']);
    }
    
   )
}
}