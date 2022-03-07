import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersHistoryRoutingModule } from './orders-history-routing.module';
import { SalesComponent } from './sales/sales.component';
import { FilterStatusOrdersPipe } from './pipes/filter-status-orders.pipe';

@NgModule({
  declarations: [
    SalesComponent,
    FilterStatusOrdersPipe
  ],
  imports: [
    CommonModule,
    OrdersHistoryRoutingModule
  ]
})
export class OrdersHistoryModule { }
