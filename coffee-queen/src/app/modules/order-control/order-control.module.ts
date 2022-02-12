import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderControlRoutingModule } from './order-control-routing.module';

import { ControlComponent } from './control/control.component';

@NgModule({
  declarations: [
    ControlComponent
  ],
  imports: [
    CommonModule,
    OrderControlRoutingModule
  ]
})
export class OrderControlModule { }
