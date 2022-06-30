import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from '../login';

@Component({
  selector: 'app-external-login',
  templateUrl: './external-login.component.html',
  styleUrls: ['./external-login.component.scss']
})
export class ExternalLoginComponent implements OnInit {
  login:Login = new Login()

  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  onLogin(){
    this.route.navigate(['/','external','externalOperation'])
  }

  onBack(){
    this.route.navigate(['/','home'])
  }

  

}
