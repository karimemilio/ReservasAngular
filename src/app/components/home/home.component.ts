import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userId: any;
  id: any;
  title: any;
  body: any;
  datita: any;
  logged:any;
  user:any;
  url_servicios = 'http://localhost:8080/ttps-spring/api/Servicios';

  constructor(private http : HttpClient) {
   }

  ngOnInit(): void {
    this.http.get(this.url_servicios).subscribe(parameter => {
      this.datita=parameter
      console.log(parameter)
    })
  }


  }
