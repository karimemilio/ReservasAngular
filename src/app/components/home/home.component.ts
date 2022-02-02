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

  constructor(private http : HttpClient) {
    console.log("El login service tiene")
    console.log(LoginService)
   }

  ngOnInit(): void {
    this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe(parameter => {
      this.datita=parameter
    })

  }
}