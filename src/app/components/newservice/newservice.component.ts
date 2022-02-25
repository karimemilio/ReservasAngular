import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { LoginService } from 'src/app/services/login/login.service';
import { Service } from "src/app/models/service.model";


@Component({
  selector: "app-newservice",
  templateUrl: "./newservice.component.html",
  styleUrls: ["./newservice.component.css"]
})

export class NewserviceComponent {
  id?:any;
  nombre: any;
  tipo: any;
  descripcion: any;
  url: any;
  redesSociales: any;
  telefono: any;
  urlAltaServicio = 'http://localhost:8080/ttps-spring/api/servicio'


  constructor(private http: HttpClient,private authService: LoginService, private router: Router) {}


  newService() {
    let servicioCreado : any
    console.log(this.tipo)
    this.http.post(this.urlAltaServicio,{
      "nombre": this.nombre,
      "tipo": this.tipo,
      "descripcion": this.descripcion,
      "url": this.url,
      "redesSociales": this.redesSociales,
      "telefono": this.telefono,
      "userId": this.authService.getUserLoggedIn()["id"]} ).subscribe(
        servicio => servicioCreado = servicio,
        err => {alert ("Ocurrio un error al crear el servicio")},
        () => {alert("Se creo el servicio "+ servicioCreado.nombre+ " con exito");
          this.router.navigate(["/services"])
          
      }
     
    )
    
    }

  cancelar(): void {
    this.router.navigate(['/index']);
  }
}