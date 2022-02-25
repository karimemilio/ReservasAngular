import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataSharingService } from 'src/app/services/datasharing/datasharing.service';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  logged:boolean | undefined;
  user:any;
  
  constructor(private authService: LoginService, private router: Router) {
  }

  ngOnInit(): void {
    this.logged = this.authService.isLogged()
    this.user = this.authService.getUserLoggedIn()["nombre"]
    let id  = this.authService.getUserLoggedIn()["id"]
    console.log("algo id "+id)
  }
  
  func(): void {
    this.authService.logout()
    this.router.navigate(['/home']);
    window.location.reload();
  }

}
