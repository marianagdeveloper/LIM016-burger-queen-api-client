import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserControlComponent } from './user-control/user-control.component';
const routes: Routes = [
  { path: '',
    component: UserControlComponent
 },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
 
exports: [RouterModule],
})
export class UsersControlRoutingModule {}
