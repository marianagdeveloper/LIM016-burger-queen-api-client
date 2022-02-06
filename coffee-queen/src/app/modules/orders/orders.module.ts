import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart/cart.component';
import { FormsModule } from '@angular/forms';
import { OrdersRoutingModule } from './orders-routing.module';
import { CardProductComponent } from '../../shared/components/card/card-product/card-product.component';
import { SharedModule } from 'src/app/shared/shared.module';




@NgModule({
  declarations: [
    CartComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    OrdersRoutingModule,
    SharedModule
  ]
})
export class OrdersModule { }
