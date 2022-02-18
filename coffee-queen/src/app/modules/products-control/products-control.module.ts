import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductControlComponent } from './product-control/product-control.component';
import { ProductsControlRoutingModule } from './products-control-routing.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProductControlComponent
  ],
  imports: [
 
  CommonModule,
    ProductsControlRoutingModule,
    FormsModule,
  ]
})
export class ProductsControlModule { }
