import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlAdminComponent } from './control-admin/control-admin.component';
import { PendingAdminComponent } from './pending-admin/pending-admin.component';
import { DeliveringAdminComponent } from './delivering-admin/delivering-admin.component';
import { DeliveredAdminComponent } from './delivered-admin/delivered-admin.component';
import { DoneAdminComponent } from './done-admin/done-admin.component';
import { CanceledAdminComponent } from './canceled-admin/canceled-admin.component';
import { FilterStatusAdminPipe } from './pipes/filter-status-admin.pipe';
import { OrderControlAdminRoutingModule } from './order-control-admin-routing.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ControlAdminComponent,
    PendingAdminComponent,
    DeliveringAdminComponent,
    DeliveredAdminComponent,
    DoneAdminComponent,
    CanceledAdminComponent,
    FilterStatusAdminPipe
  ],
  imports: [
    CommonModule,
    OrderControlAdminRoutingModule,
    RouterModule
  ]
})
export class OrderControlAdminModule { }
