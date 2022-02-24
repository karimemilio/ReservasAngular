import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-newservice',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  userId: any;
  id: any;
  title: any;
  body: any;
  datita: any;
  urlMisServicios = 'http://localhost:8080/ttps-spring/api/ServiciosDeUsuario/'
  urlEliminarServicio = 'http://localhost:8080/ttps-spring/api/servicio/'


  constructor(private http : HttpClient, private router: Router ) { 
  
  }

  ngOnInit(): void {
    let userId = sessionStorage.getItem('userId')
    console.log(userId)

    this.http.get(this.urlMisServicios+"/"+userId).subscribe(parameter => {
      this.datita=parameter
    })
  }

  delete(id: number){
    let servicioBorrado: any
    console.log("El numero de id es: ", id)
    if (confirm("Está seguro que desea eliminar el servicio " + id + " ?")) {
        this.http.delete(this.urlEliminarServicio+"/"+id).subscribe( 
          servicio => servicioBorrado = servicio,
          error => alert("No se pudo borrar el servicio seleccionado"),
          () => alert("Has borrado al servicio  "+ servicioBorrado.nombre)
        )
    
    console.log(servicioBorrado)
    window.location.reload();

    }
  }

  edit(usuario: any){
    console.log("El numero de id es: ", usuario.id)
    if (confirm("Está seguro que desea editar el servicio " + usuario.id + " ?")) {
      // this.router.navigate(['/editservice']);
      this.router.navigate(['/editservice']);
    }
  }
}