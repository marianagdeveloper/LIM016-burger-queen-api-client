import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersHistoryRoutingModule } from './orders-history-routing.module';
import { SalesComponent } from './sales/sales.component';



@NgModule({
  declarations: [
    SalesComponent
  ],
  imports: [
    CommonModule,
    OrdersHistoryRoutingModule
  ]
})
export class OrdersHistoryModule { }
