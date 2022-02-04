import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CafesListComponent } from './cafes-list/cafes-list.component';


const routes: Routes = [

  {
    path: 'cafes',
    component: CafesListComponent
  }
];
//{useHash:true}
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CafesRoutingModule {}
