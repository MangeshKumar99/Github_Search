import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RepoDetailsComponent} from './repo-details/repo-details.component'
import {ProfileDetailsComponent} from './profile-details/profile-details.component'
import {ProfileComponent} from './profile/profile.component'

const routes: Routes = [
  {path:'',redirectTo:'user',pathMatch:'full'},
  {path: 'user',component: ProfileComponent},
  {path:'user/:name',component:ProfileDetailsComponent},
  {path:'repo/:user/:name',component:RepoDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
