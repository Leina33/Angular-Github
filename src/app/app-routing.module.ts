import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GithubComponent } from './github/github.component';
import { AboutComponent } from './about/about.component';
import {ProfileComponent} from './profile/profile.component'
import { NotFoundComponent } from './not-found/not-found.component';



const routes: Routes = [
  {path:'about', component:AboutComponent},
  {path: 'github', component:GithubComponent},
  {path:'profile',component:ProfileComponent},
  {"path":"  ","component":NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
