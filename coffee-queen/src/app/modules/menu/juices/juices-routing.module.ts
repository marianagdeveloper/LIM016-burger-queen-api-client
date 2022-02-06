import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JuicesListComponent } from './juices-list/juices-list.component';


const routes: Routes = [

  {
    path: '',
    component: JuicesListComponent
  }
];
//{useHash:true}
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JuicesRoutingModule {}
