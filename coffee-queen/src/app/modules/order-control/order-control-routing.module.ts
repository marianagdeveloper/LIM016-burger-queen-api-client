import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ControlComponent } from './control/control.component';
import { PendingComponent } from './pending/pending.component';

const routes: Routes = [
  {
    path:'',
    component: ControlComponent/* ,
    children: [
      {
        path: 'control/pending',
        component: PendingComponent
      }
    ] */
  },
  {
    path: 'control/pending',
    component: PendingComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrderControlRoutingModule {}
