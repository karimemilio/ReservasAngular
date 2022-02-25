import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { LoginService } from 'src/app/services/login/login.service';


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


  constructor(private http: HttpClient,private authService: LoginService) {}

  newService() {
    let servicioCreado : any
    console.log(this.nombre);
    console.log(this.descripcion);
    // console.log(sessionStorage.getItem('userId'));

    this.http.post(this.urlAltaServicio,{
      "nombre": this.nombre,
      "tipo": this.tipo,
      "descripcion": this.descripcion,
      "url": this.url,
      "redesSociales": this.redesSociales,
      "telefono": this.telefono,
      "userId": this.authService.getUserLoggedIn()["id"]} ).subscribe(
        servicio => servicioCreado = servicio,
        () => alert("Se creo el servicio cone exito")
    )
      window.location.reload()
  }
}