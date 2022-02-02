import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private http : HttpClient, private router: Router ) { }

  ngOnInit(): void {
    this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe(parameter => {
      this.datita=parameter
    })
  }

  delete(id: number){
    console.log("El numero de id es: ", id)
    if (confirm("Está seguro que desea eliminar el servicio " + id + " ?")) {
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