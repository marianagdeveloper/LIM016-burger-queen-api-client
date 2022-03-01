import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { CardProductComponent } from './components/card/card-product/card-product.component';

import { RouterModule } from '@angular/router';
import { CardOrderComponent } from './components/card/card-order/card-order.component';
import { CardOrderCookComponent } from './components/cook/card-order-cook/card-order-cook.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    CardProductComponent,
    CardOrderComponent,
    CardOrderCookComponent
  ],
  exports:[
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    CardProductComponent,
    CardOrderComponent,
    CardOrderCookComponent
  ],
  imports:[
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    RouterModule,
    NgbModule
  ]
})
export class SharedModule {

}
