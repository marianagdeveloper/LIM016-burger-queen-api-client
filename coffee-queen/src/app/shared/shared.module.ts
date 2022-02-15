import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { CardProductComponent } from './components/card/card-product/card-product.component';
import { CardOrderComponent } from './components/card/card-order/card-order.component';

@NgModule({
  declarations: [
    CardProductComponent,
    CardOrderComponent
  ],
  exports:[
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    CardProductComponent,
    CardOrderComponent
  ],
  imports:[
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule
  ]
})
export class SharedModule {

}
