import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BurgersListComponent } from './burgers-list/burgers-list.component';
import { BurgersRoutingModule } from './burgers-routing.modules';
import { ProductsListComponent } from './../../product/products-list/products-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProductService } from './../../../data/services/api/product.service';


@NgModule({
  declarations: [
    BurgersListComponent,
    //ProductsListComponent
  ],
  providers: [
    ProductService
  ],
  imports: [
CommonModule,
    BurgersRoutingModule,
    SharedModule,
  ],
 /*  exports: [
    BurgersListComponent
  ] */

})
export class BurgersModule { }
