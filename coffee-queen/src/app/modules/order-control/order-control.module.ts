import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderControlRoutingModule } from './order-control-routing.module';

import { ControlComponent } from './control/control.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FilterStatusPipe } from './pipes/filter-status.pipe';

@NgModule({
  declarations: [
    ControlComponent,
    FilterStatusPipe
  ],
  imports: [
    CommonModule,
    SharedModule,
    OrderControlRoutingModule
  ]
})
export class OrderControlModule { }
