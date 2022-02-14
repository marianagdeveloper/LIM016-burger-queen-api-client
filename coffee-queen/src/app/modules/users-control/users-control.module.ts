import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserControlComponent } from './user-control/user-control.component';
import { UsersControlRoutingModule } from './users-control-routing.module';



@NgModule({
  declarations: [
    UserControlComponent
  ],
  imports: [
    CommonModule,
    UsersControlRoutingModule
  ]
})
export class UsersControlModule { }
