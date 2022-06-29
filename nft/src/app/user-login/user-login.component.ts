import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from '../login';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {
  login:Login = new Login()

  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  onLogin(){
    this.route.navigate(['/','user','userOperation'])
  }

}
