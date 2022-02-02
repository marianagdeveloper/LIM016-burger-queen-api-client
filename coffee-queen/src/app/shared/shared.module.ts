import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
//import { TitleTComponent } from './components/title-t/title-t.component';

import * as fromComponents from "./components";

@NgModule({
  declarations: [...fromComponents.components],
  exports:[
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    
  ],
  imports:[
  FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    ...fromComponents.components,
    

  ]
})
export class SharedModule { 
  
}
