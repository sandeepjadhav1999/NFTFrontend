import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  onIssueNft(){
    this.route.navigate(['/','admin','issueNft'])
  }

  onRetriveNft(){
    this.route.navigate(['/','admin','allNft'])
  }
  onLogOut(){
    this.route.navigate(['/','home'])
  }


}
