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
  data: any;
  nombre: any;
  descripcion: any
  rrss: any;
  telefono: any;
  url: any;
  service!: Service;
  nuestraURL = "www.google.com";
  

  constructor(private route: ActivatedRoute,private http: HttpClient) { 
  }
 
  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params => {
      this.id = params['id']
      this.data = params['data']
      
    });
  }
  save(){
    this.service = new Service(this.id, this.nombre, this.descripcion, this.rrss, this.telefono, this.url)
    this.addService()
    alert("Se guardo")
  }

  addService (): Observable<Service> {
    return this.http.post<Service>(this.nuestraURL, this.service, httpOptions)
  }
}