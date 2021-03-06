import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  onLogout(){
    this.route.navigate(['/','home'])
    sessionStorage.removeItem('userName')
  }

}
