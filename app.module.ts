import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EvaluationComponent } from './component/evaluation/evaluation.component';
import { TemplateComponent } from './component/template/template.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { AllevaluationComponent } from './component/allevaluation/allevaluation.component';
import { HomeComponent } from './component/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import {Template1Component} from './component/template/template1.component'
import { DataService } from './component/data.service';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { CreateTemplateComponent } from './component/create-template/create-template.component'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator'; 
import { EvaluationDisplayComponent } from './component/allevaluation/evaluation-display.component';
import {FormsModule} from '@angular/forms';



@NgModule({
  declarations: [AppComponent,EvaluationComponent,TemplateComponent,NavbarComponent,AllevaluationComponent, HomeComponent,Template1Component, CreateTemplateComponent, EvaluationDisplayComponent],
  imports: [BrowserModule,AppRoutingModule,HttpClientModule,MDBBootstrapModule.forRoot(),MatPaginatorModule,BrowserAnimationsModule,FormsModule],
  providers: [DataService],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule { }
