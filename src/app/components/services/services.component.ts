import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

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

  constructor(private http : HttpClient) { }

  ngOnInit(): void {
    this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe(parameter => {
      this.datita=parameter
    })
  }
}