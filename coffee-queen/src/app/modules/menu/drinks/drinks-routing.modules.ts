import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DrinksListComponent } from './drinks-list/drinks-list.component';

const routes: Routes = [
  {
    path: '',
    component: DrinksListComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
exports: [RouterModule],
})
export class DrinksRoutingModule {}
