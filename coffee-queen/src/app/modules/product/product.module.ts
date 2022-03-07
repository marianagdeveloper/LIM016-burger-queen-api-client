import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { ProductRoutingModule } from './product-routing.module';

import { ProductsListComponent } from './products-list/products-list.component';

@NgModule({
  declarations: [
    ProductsListComponent
  ],
  imports: [
  CommonModule,
    SharedModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
