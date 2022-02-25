import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { Router } from "@angular/router";
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

  ngOnInit(): void{
    if (this.authService.isLogged()){
      this.router.navigate(['/home'])
    }
  }

  login() {
    this.http.post<any>(this.urlAutentificar,{
      "email": this.email,
      "password":this.password   
  }).subscribe( user => this.user = user,
      error => alert ("El usuario es invalido "),
      () => {this.usuarioValido = true,
      this.authService.setUserLoggedIn(this.user)
      this.router.navigate(['/index']);
    }
    
   )
}
}