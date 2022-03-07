import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanceledAdminComponent } from './canceled-admin/canceled-admin.component';
import { ControlAdminComponent } from './control-admin/control-admin.component';
import { DeliveredAdminComponent } from './delivered-admin/delivered-admin.component';
import { DeliveringAdminComponent } from './delivering-admin/delivering-admin.component';
import { DoneAdminComponent } from './done-admin/done-admin.component';
import { PendingAdminComponent } from './pending-admin/pending-admin.component';


const routes: Routes = [
  {
    path:'',
    component: ControlAdminComponent,
    children: [
      {
        path: 'pending-admin',
        component: PendingAdminComponent
      },
      {
        path: 'delivering-admin',
        component: DeliveringAdminComponent
      },
      {
        path: 'preparing-admin',
        component: DoneAdminComponent
      },
      {
        path: 'delivered-admin',
        component: DeliveredAdminComponent
      },
      {
        path: 'canceled-admin',
        component: CanceledAdminComponent
      }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrderControlAdminRoutingModule {}
