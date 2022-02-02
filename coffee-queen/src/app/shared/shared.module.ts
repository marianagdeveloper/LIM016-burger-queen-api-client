import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
//import { TitleTComponent } from './components/title-t/title-t.component';

//import * as fromComponents from "./components";

//import * as fromComponents from "./components";
import { TitleH1Component } from './components/title-h1/title-h1.component';
@NgModule({
  declarations: [
    TitleH1Component
  ],
  exports:[
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    //CommonModule,
    TitleH1Component
  ],
  imports:[
  FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    //CommonModule
  ]
})
export class SharedModule { 
  
}
