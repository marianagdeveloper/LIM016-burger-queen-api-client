import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductControlComponent } from './product-control/product-control.component';
import { ProductsControlRoutingModule } from './products-control-routing.module';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  declarations: [ProductControlComponent],
  imports: [
    CommonModule,
    ProductsControlRoutingModule,
    FormsModule,
    NgSelectModule,
  ],
})
export class ProductsControlModule {}
