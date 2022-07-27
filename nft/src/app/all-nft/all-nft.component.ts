import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IssueNfts } from '../issue-nfts';
import { IssueNftService } from '../issue-nfts.service';

@Component({
  selector: 'app-all-nft',
  templateUrl: './all-nft.component.html',
  styleUrls: ['./all-nft.component.scss']
})
export class AllNftComponent implements OnInit {
  nfts:IssueNfts[]=[]
  viewNft: IssueNfts = new IssueNfts();

  constructor(private issueNftServe:IssueNftService, private route:Router) { }

  ngOnInit() {
    this.issueNftServe.getAllProjects().subscribe((response: IssueNfts[]) => {
      // this.nfts = [];
      // response.map((obj: any) => {
      //   this.nfts = this.nfts.concat(obj.nfts);
      //   console.log(this.nfts)
      // });
      this.nfts=response
      console.log(this.nfts)
    });
  }

  back(){
    this.route.navigate(['/',"admin","adminoperation"])
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

  expireNft(event:any, index:number){
    var exp=this.nfts[index]
    let final= {nftId:exp.nftId}
    this.issueNftServe.expireNft(final).subscribe((res)=>{
      if(res.result === "success"){
        this.issueNftServe.getAllProjects().subscribe((response: IssueNfts[]) => {
          this.nfts=response
      console.log(this.nfts)
    });
      }
    })
  }
    
}
