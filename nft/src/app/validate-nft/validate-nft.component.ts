import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IssueNftService } from '../issue-nfts.service';

@Component({
  selector: 'app-validate-nft',
  templateUrl: './validate-nft.component.html',
  styleUrls: ['./validate-nft.component.scss']
})
export class ValidateNftComponent implements OnInit {

  level:any=["Level 1","Level 2","Level 3","Level 4", "Level 5"]
  result:any
  validateNft: FormGroup | any = null;

  imgs:any

  constructor(private issueNftService:IssueNftService, private router: Router) { }

  ngOnInit(){
    this.validateNft = new FormGroup({
      userName: new FormControl(null, [ Validators.required ]),
      fName: new FormControl(null, [Validators.required]),
      lName: new FormControl(null, [ Validators.required ]),
      circleName: new FormControl(null, [ Validators.required ]),
      masteryLevel:new FormControl(null, [ Validators.required ]),
      // expiryDate:new FormControl(null, [ Validators.required ]),
      emailId: new FormControl(null, [ Validators.required ]),
      url: new FormControl(null, [ Validators.required ]),
      nftId:new FormControl(null, [ Validators.required ]),
    });    
  }

  onIssueNftClick(event:any)
  {
    this.validateNft["submitted"] = true;
    

    if (this.validateNft.valid)          
    {
      console.log(this.validateNft.value)
      this.issueNftService.validateNft(this.validateNft.value).subscribe((response) => {
        console.log(response.result)
        if (response.result == "valid"){
          this.result = response.result
          this.validateNft.reset() 
          this.validateNft.get('userName').clearValidators();
          this.validateNft.get('userName').updateValueAndValidity();
          this.validateNft.get('fName').clearValidators();
          this.validateNft.get('fName').updateValueAndValidity();
          this.validateNft.get('lName').clearValidators();
          this.validateNft.get('lName').updateValueAndValidity();
          this.validateNft.get('circleName').clearValidators();
          this.validateNft.get('circleName').updateValueAndValidity();
          this.validateNft.get('masteryLevel').clearValidators();
          this.validateNft.get('masteryLevel').updateValueAndValidity();
          // this.validateNft.get('expiryDate').clearValidators();
          // this.validateNft.get('expiryDate').updateValueAndValidity();
          this.validateNft.get('emailId').clearValidators();
          this.validateNft.get('emailId').updateValueAndValidity();
          this.validateNft.get('url').clearValidators();
          this.validateNft.get('url').updateValueAndValidity();
          this.validateNft.get('nftId').clearValidators();
          this.validateNft.get('nftId').updateValueAndValidity();
          
        }
        else {
          this.result=response.result

        }
      }, (error) => {                
        console.log(error); 
      });
    }
    else
    {
      console.log(this.validateNft.errors);
    }
  }

  onBack(){
    this.router.navigate(['/','external','externalOperation'])
  }

  imgselect(){
    if(this.validateNft.value.masteryLevel === "Level 1"){
      this.imgs="assets/Exp.png"
      console.log(this.imgs)
    }
    else if(this.validateNft.value.masteryLevel === "Level 2"){
      this.imgs="assets/Data.png"
      console.log(this.imgs)
    }
    else if(this.validateNft.value.masteryLevel === "Level 3"){
      this.imgs="assets/Quality.png"
      console.log(this.imgs)
    }
    else if(this.validateNft.value.masteryLevel === "Level 4"){
      this.imgs="assets/Platform.png"
      console.log(this.imgs)
    }
    else{
      this.imgs="assets/Cloud.png"
      console.log(this.imgs)
    }

    
  }


}