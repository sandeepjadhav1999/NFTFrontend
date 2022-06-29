import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IssueNfts } from '../issue-nfts';
import { IssueNftService } from '../issue-nfts.service';
import { map } from 'rxjs/operators'

@Component({
  selector: 'app-nft-details1',
  templateUrl: './nft-details1.component.html',
  styleUrls: ['./nft-details1.component.scss']
})
export class NftDetails1Component implements OnInit {
  inftOwner:IssueNfts
  nfts:IssueNfts[]=[]
  // nfts:IssueNfts=new IssueNfts()

  constructor(private issueNftService:IssueNftService,private route:Router,private activeRoute:ActivatedRoute) { }

  ngOnInit(){
    this.activeRoute.params.subscribe((params)=>{
      this.inftOwner=params['nftOwner']
      console.log(this.inftOwner)
    })

    this.issueNftService.getuserbyuserName(this.inftOwner).subscribe((response: any) => {
      this.nfts = [];
      console.log(response)
      response.map((obj: any) => {
        this.nfts = this.nfts.concat(obj.nfts);
        console.log(this.nfts);
      });
      // this.nfts=response
      // console.log(this.nfts)

    });
  }

  back(){
    this.route.navigate(['/','admin'])
  }

}
