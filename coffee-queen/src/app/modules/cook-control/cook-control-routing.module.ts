import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CookControlComponent } from './cook-control/cook-control.component';


const routes: Routes = [
  { path: '',
    component: CookControlComponent
  },

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CookControlRoutingModule {}
