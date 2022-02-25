import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Component } from "@angular/core";
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
  selector: "app-editService",
  templateUrl: "./editService.component.html",
  styleUrls: ["./editService.component.css"]
})
export class EditServiceComponent {
  public id: any;
  private routeSub: Subscription = new Subscription;
  public service!: any;
  public tiposServicios = ["Recital","Food truck","Limpieza","Circo","Otro"]
  urlPutServicio = 'http://localhost:8080/ttps-spring/api/servicio' 
  urlGetServicio = 'http://localhost:8080/ttps-spring/api/servicio';
  nombreActual : any

  constructor(private route: ActivatedRoute,private http: HttpClient,private router: Router) { 
  }
 
  ngOnInit() {

    this.routeSub = this.route.params.subscribe(params =>  this.id = params['id']);
    this.http.get(this.urlGetServicio+"/"+this.id).subscribe(parameter => {
      this.service = parameter,
      this.nombreActual = this.service.nombre
    })
    

    
  }


  save() {
    this.http.put<Service>(this.urlPutServicio+"/" + this.service.id, this.service).subscribe(
      parameter => this.service = parameter,
        err => alert("Se genero un error al editar el servicio"),
        () => { this.nombreActual = this.service.nombre
          alert('El servicio '+ this.nombreActual + " se edito con exito");
          this.router.navigate(["/services"])    }
        )
    }

  
  getTiposEventos() {
    return this.tiposServicios
  }
}