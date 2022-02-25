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
  

  constructor(private route: ActivatedRoute,private http: HttpClient) { 
  }
 
  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params =>  this.id = params['id']);
    console.log(this.id)
    this.http.get(this.urlGetServicio+"/"+this.id).subscribe(parameter => {
      this.service = parameter
    })
    
  }

  save(){
    this.addService()
    alert("Se guardo")
  }

  addService (): Observable<Service> {
    return this.http.post<Service>(this.urlPutServicio, this.service)
  }
  
  getTiposEventos() {
    console.log(this.tiposServicios)
    return this.tiposServicios
  }
}