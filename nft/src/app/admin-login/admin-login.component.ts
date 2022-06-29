import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from '../login';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {

  login:Login = new Login()

  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  onLogin(){
    this.route.navigate(['/','admin','adminoperation'])
  }

 
}
