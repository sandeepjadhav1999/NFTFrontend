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
  viewNft: IssueNfts = new IssueNfts();
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
    this.route.navigate(['/','admin','adminoperation'])
  }

  onViewClick(event: any, index: number){
    this.viewNft.aesKey=this.nfts[index].aesKey
    this.viewNft.circleName=this.nfts[index].circleName
    this.viewNft.docType=this.nfts[index].docType
    this.viewNft.emailId=this.nfts[index].emailId
    this.viewNft.expiryDate=this.nfts[index].expiryDate
    this.viewNft.fName=this.nfts[index].fName
    this.viewNft.itemCpyNum=this.nfts[index].itemCpyNum
    this.viewNft.itemID=this.nfts[index].itemID
    this.viewNft.lName=this.nfts[index].lName
    this.viewNft.masteryLevel=this.nfts[index].masteryLevel
    this.viewNft.name=this.nfts[index].name
    this.viewNft.nftId=this.nfts[index].nftId
    this.viewNft.nftOwner=this.nfts[index].nftOwner
    this.viewNft.nftStatus=this.nfts[index].nftStatus
    this.viewNft.nftURL=this.nfts[index].nftURL
    this.viewNft.owner=this.nfts[index].owner
    this.viewNft.price=this.nfts[index].price
    this.viewNft.symbol=this.nfts[index].symbol
    this.viewNft.timeStamp=this.nfts[index].timeStamp
  }

}
