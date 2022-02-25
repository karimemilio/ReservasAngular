import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Observable, Subscription } from "rxjs";
import { Service } from "src/app/models/service.model";
import { User } from "src/app/models/user.model";
import { LoginService } from "src/app/services/login/login.service";
import { catchError } from 'rxjs/operators'

const httpOptions = {
  headers: new HttpHeaders({
  'Content-Type': 'application/json',
  'Authorization': 'my-auth-token'
  })
 };

@Component({
  selector: "app-editUser",
  templateUrl: "./editUser.component.html",
  styleUrls: ["./editUser.component.css"]
})

export class EditUserComponent implements OnInit {
  name: any;
  email: any;
  password: any;
  user: any;
  urlPutUsuario = 'http://localhost:8080/ttps-spring/api/usuario';


  constructor(private http: HttpClient, private authService: LoginService, private router: Router) { }

  ngOnInit(): void {
    this.name = this.authService.getUserLoggedIn()['nombre']
    this.email = this.authService.getUserLoggedIn()['mail']
  }
  
  edit() {

    const userId = this.authService.getUserLoggedIn()["id"]


    this.http.put<any>(this.urlPutUsuario+"/"+userId,{
      "mail": this.email,
      "password":this.password,
      "nombre":this.name 
  }).subscribe( user => this.user = user,
      err => alert ("El email ya existe, por favor ingrese otro"),
      () => {  alert('El usuario se modifico con exito');
      this.authService.setUserLoggedIn(this.user)
      this.router.navigate(['/index']);
    }
   )
  }
}