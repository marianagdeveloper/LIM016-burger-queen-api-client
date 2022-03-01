import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderControlRoutingModule } from './order-control-routing.module';

import { ControlComponent } from './control/control.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FilterStatusPipe } from './pipes/filter-status.pipe';
import { DeliveringComponent } from './delivering/delivering.component';
import { DoneComponent } from './done/done.component';
import { DeliveredComponent } from './delivered/delivered.component';
import { CanceledComponent } from './canceled/canceled.component';
import { PendingComponent } from './pending/pending.component';

@NgModule({
  declarations: [
    ControlComponent,
    FilterStatusPipe,
    PendingComponent,
    DeliveringComponent,
    DoneComponent,
    DeliveredComponent,
    CanceledComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    OrderControlRoutingModule
  ]
})
export class OrderControlModule { }
