import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IssueNfts } from '../issue-nfts';
import { IssueNftService } from '../issue-nfts.service';

@Component({
  selector: 'app-history-nft',
  templateUrl: './history-nft.component.html',
  styleUrls: ['./history-nft.component.scss']
})
export class HistoryNftComponent implements OnInit {
  historyNft:IssueNfts[]=[]
  nftId:IssueNfts

  constructor(private nftService:IssueNftService, private route:Router, private acrtiveRoute:ActivatedRoute) { }

  ngOnInit(){
    this.acrtiveRoute.params.subscribe((parms)=>{
      this.nftId=parms['nftId'] 
    })

    this.nftService.getHistorybynftId(this.nftId).subscribe((res:IssueNfts)=>{
      this.historyNft=res.nft
      console.log(this.historyNft) 
    }) 
  }

  back(){
    this.route.navigate(['/','admin','allNft'])
  }

}
