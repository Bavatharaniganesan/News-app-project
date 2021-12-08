import { BusinessnewsComponent } from './businessnews/businessnews.component';
import { TopheadingComponent } from './topheading/topheading.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TechnewsComponent } from './technews/technews.component';
import { SportsnewsComponent } from './sportsnews/sportsnews.component';
import { HealthnewsComponent } from './healthnews/healthnews.component';


const routes: Routes = [
  {path:'',component:TopheadingComponent}, //home
  {path:'tech',component:TechnewsComponent}, //technews
  {path:'business',component:BusinessnewsComponent}, //businessnews
  {path:'sports',component:SportsnewsComponent}, //sportsnews
  {path:'health',component:HealthnewsComponent} //healthnews
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
