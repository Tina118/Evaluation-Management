import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllevaluationComponent } from './component/allevaluation/allevaluation.component';
import { CreateTemplateComponent } from './component/create-template/create-template.component';
import { EvaluationComponent } from './component/evaluation/evaluation.component';
import { HomeComponent } from './component/home/home.component';
import {TemplateComponent} from './component/template/template.component';
import { Template1Component } from './component/template/template1.component';
import { EvaluationDisplayComponent } from './component/allevaluation/evaluation-display.component';

const routes: Routes = [
  {path : "",component : HomeComponent},
  {path : "evaluation" , component : EvaluationComponent},
  {path : "allevaluation" , component : AllevaluationComponent},
  {path : "template" , component : TemplateComponent} ,
  {path : "template/:qty" , component : Template1Component},
  {path : "allevaluation/:qty" , component : EvaluationDisplayComponent},
  {path : "create-template" , component :  CreateTemplateComponent},

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
