import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DessertsListComponent } from './desserts-list/desserts-list.component';

const routes: Routes = [
  {
    path: '',
    component: DessertsListComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DessertsRoutingModule {}
