import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

//import * as fromComponents from "./components";
import { CardProductComponent } from './components/card/card-product/card-product.component';
import { TitleH1Component } from './components/title-h1/title-h1.component';

@NgModule({
  declarations: [
    TitleH1Component,
    CardProductComponent
  ],
  exports:[
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    TitleH1Component,
    CardProductComponent
  ],
  imports:[
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule
  ]
})
export class SharedModule { }
