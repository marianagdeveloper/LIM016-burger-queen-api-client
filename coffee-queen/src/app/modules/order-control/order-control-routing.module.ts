import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ControlComponent } from './control/control.component';
import { PendingComponent } from './pending/pending.component';
import { DeliveredComponent } from './delivered/delivered.component';
import { DoneComponent } from './done/done.component';
import { CanceledComponent } from './canceled/canceled.component';
import { DeliveringComponent } from './delivering/delivering.component';

const routes: Routes = [
  {
    path:'',
    component: ControlComponent,
    children: [
      {
        path: 'pending',
        component: PendingComponent
      },
      {
        path: 'delivering',
        component: DeliveringComponent
      },
      {
        path: 'done',
        component: DoneComponent
      },
      {
        path: 'delivered',
        component: DeliveredComponent
      },
      {
        path: 'canceled',
        component: CanceledComponent
      }
    ]
  }/* ,
  {
    path: 'pending',
    component: PendingComponent
  } */
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrderControlRoutingModule {}
