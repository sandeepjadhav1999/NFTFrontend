import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IssueNfts } from './issue-nfts';

@Injectable({
  providedIn: 'root'
})
export class IssueNftService {
  urlPrefix: string = "http://localhost:3001";

  constructor(private httpClient: HttpClient) { }

  getAllProjects(): Observable<IssueNfts[]>
  {
    return this.httpClient.get<IssueNfts[]>(this.urlPrefix + "/nft/retrieveAllNFTs")
  }

  insertProject(newProject: IssueNfts): Observable<IssueNfts>
  {
    return this.httpClient.post<IssueNfts>(this.urlPrefix + "/nft/issueNFT", newProject);
  }
  getuserbyuserName(firstName:IssueNfts):Observable<IssueNfts>
  {
    return this.httpClient.get<IssueNfts>(this.urlPrefix+"/nft/retrieveAllNFTSForUser/"+firstName,{responseType:"json"})
  }
}
