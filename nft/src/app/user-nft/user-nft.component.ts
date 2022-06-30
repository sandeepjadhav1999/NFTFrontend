import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IssueNfts } from '../issue-nfts';
import { IssueNftService } from '../issue-nfts.service';

@Component({
  selector: 'app-user-nft',
  templateUrl: './user-nft.component.html',
  styleUrls: ['./user-nft.component.scss']
})
export class UserNftComponent implements OnInit {
  userName:any
  nfts:IssueNfts[]=[]
  viewNft: IssueNfts = new IssueNfts();
  constructor(private userNft:IssueNftService, private route:Router) { }

  ngOnInit(){
    this.userName=sessionStorage.getItem('userName')
    console.log(this.userName)

    this.userNft.getuserbyuserName(this.userName).subscribe((response: any) => {
      this.nfts = [];
      response.map((obj: any) => {
        this.nfts = this.nfts.concat(obj.nfts);
        console.log(this.nfts)
      });
    });
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
  
  onBack(){
    this.route.navigate(['/','user','userOperation'])
    
  }

}
