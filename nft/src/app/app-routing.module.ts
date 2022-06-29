import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { AllNftComponent } from './all-nft/all-nft.component';
import { CreatAccountAdminComponent } from './creat-account-admin/creat-account-admin.component';
import { HomeComponent } from './home/home.component';
import { IssueNftComponent } from './issue-nft/issue-nft.component';
import { NftDetails1Component } from './nft-details1/nft-details1.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserPageComponent } from './user-page/user-page.component';

const routes: Routes = [
  {path:"",redirectTo:"home",pathMatch:"full"},
  {path:"home", component:HomeComponent},
  {path:"admin", children:[
    {path:"adminlogin", component:AdminLoginComponent},
    {path:"adminoperation",component:AdminPageComponent},
    {path:"issueNft", component:IssueNftComponent},
    {path:"allNft",component:AllNftComponent},
  ]},
  {path:"user", children:[
    {path:"userLogin",component:UserLoginComponent},
    {path:"userOperation",component:UserPageComponent}
  ]},
  {path:"createAccount", component:CreatAccountAdminComponent},
  {path:"nftDetails1/:nftOwner",component:NftDetails1Component},
  
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
