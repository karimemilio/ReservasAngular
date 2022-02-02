import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { User } from "src/app/models/user.model";
import { LoginService } from "src/app/services/login/login.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent {
  email: any;
  password: any;
  usuarioValido: any;
  user: User | undefined;

  constructor(private http: HttpClient, private authService: LoginService, private router: Router ) {}

  login() {

    console.log(this.email);
    console.log(this.password);
    
    this.http.get('https://jsonplaceholder.typicode.com/todos/1').subscribe(data => {
      console.log(data);
    });
    
    //Metodos de prueba
    this.user = new User(8,"unmail@gmail.com","Carlos")
    this.usuarioValido = ((this.email == "prueba@gmail.com") && (this.password == "123"))
    //Fin
    
    if (this.usuarioValido) {
      console.log('Se está logueando');
      this.authService.setUserLoggedIn(this.user)
      this.router.navigate(['/index']);
    }
    else
    {
      alert('Error al iniciar sesión');
    }
  }
}