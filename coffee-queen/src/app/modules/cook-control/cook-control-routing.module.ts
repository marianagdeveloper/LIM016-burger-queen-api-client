import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CookControlComponent } from './cook-control/cook-control.component';
import { CookPendingComponent } from './cook-pending/cook-pending.component';
import { CookDeliveringComponent } from './cook-delivering/cook-delivering.component';
import { CookCanceledComponent } from './cook-canceled/cook-canceled.component';


const routes: Routes = [
  { path: '',
    component: CookControlComponent,
    children: [
      {
        path: 'pending',
        component: CookPendingComponent
      },
      {
        path: 'delivering',
        component: CookDeliveringComponent
      },
      {
        path: 'canceled',
        component: CookCanceledComponent
      }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CookControlRoutingModule {}
