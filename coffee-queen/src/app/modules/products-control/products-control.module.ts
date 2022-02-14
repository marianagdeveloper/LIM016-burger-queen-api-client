import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductControlComponent } from './product-control/product-control.component';
import { ProductsControlRoutingModule } from './products-control-routing.module';



@NgModule({
  declarations: [
    ProductControlComponent
  ],
  imports: [
    CommonModule,
    ProductsControlRoutingModule
  ]
})
export class ProductsControlModule { }
