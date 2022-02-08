import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BurgersListComponent } from './burgers-list/burgers-list.component';

const routes: Routes = [

  {
    path: '',
    component: BurgersListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
exports: [RouterModule],
})
export class BurgersRoutingModule {}
