import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderControlRoutingModule } from './order-control-routing.module';

import { ControlComponent } from './control/control.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CardOrderComponent } from 'src/app/shared/components/card/card-order/card-order.component';
import { FilterStatusPipe } from './pipes/FilterStatusPipe';

@NgModule({
  declarations: [
    ControlComponent,
    FilterStatusPipe
  ],
  imports: [
    CommonModule,
    SharedModule,
    OrderControlRoutingModule,

  ]
})
export class OrderControlModule { }
