import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IssueNftService } from '../issue-nfts.service';

@Component({
  selector: 'app-issue-nft',
  templateUrl: './issue-nft.component.html',
  styleUrls: ['./issue-nft.component.scss']
})
export class IssueNftComponent implements OnInit {
  issueNftFrom: FormGroup | any = null;

  constructor(private issueNftService:IssueNftService, private router: Router) { }

  ngOnInit(){
    this.issueNftFrom = new FormGroup({
      userName: new FormControl(null, [ Validators.required ]),
      fName: new FormControl(null, [Validators.required]),
      lName: new FormControl(null, [ Validators.required ]),
      circleName: new FormControl(null, [ Validators.required ]),
      masteryLevel:new FormControl(null, [ Validators.required ]),
      // expiryDate:new FormControl(null, [ Validators.required ]),
      emailId: new FormControl(null, [ Validators.required ]),
      url: new FormControl(null, [ Validators.required ]),
    });    
  }

  onIssueNftClick(event:any)
  {
    this.issueNftFrom["submitted"] = true;

    if (this.issueNftFrom.valid)          
    {
      console.log(this.issueNftFrom.value)
      this.issueNftService.insertProject(this.issueNftFrom.value).subscribe(() => {
        this.router.navigate( ['/',"nftDetails1",this.issueNftFrom.value.userName ]); 
      }, (error) => {                
        console.log(error); 
      });
    }
    else
    {
      console.log(this.issueNftFrom.errors);
    }
  }

}
