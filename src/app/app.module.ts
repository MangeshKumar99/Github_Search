import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import {ProfileService} from './profile.service'
import { HttpClientModule } from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';
import { RepoDetailsComponent } from './repo-details/repo-details.component';
import { ProfileDetailsComponent } from './profile-details/profile-details.component'




@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    RepoDetailsComponent,
    ProfileDetailsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule

 
  ],
  providers: [ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }