import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { CreatAccountAdminComponent } from './creat-account-admin/creat-account-admin.component';
import { HomeComponent } from './home/home.component';
import { IssueNftComponent } from './issue-nft/issue-nft.component';
import { HttpClientModule} from "@angular/common/http";
import { ReactiveFormsModule } from '@angular/forms';
import { NftDetails1Component } from './nft-details1/nft-details1.component';
import { AllNftComponent } from './all-nft/all-nft.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { UserPageComponent } from './user-page/user-page.component';
import { UserLoginComponent } from './user-login/user-login.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    CreatAccountAdminComponent,
    HomeComponent,
    IssueNftComponent,
    NftDetails1Component,
    AllNftComponent,
    AdminPageComponent,
    UserPageComponent,
    UserLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
