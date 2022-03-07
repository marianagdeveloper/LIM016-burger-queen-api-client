import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserControlComponent } from './user-control/user-control.component';
import { UsersControlRoutingModule } from './users-control-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';


@NgModule({
  declarations: [
    UserControlComponent
  ],
  imports: [
  CommonModule,
    UsersControlRoutingModule,
    FormsModule,
    NgSelectModule,
    ReactiveFormsModule
  ]
})
export class UsersControlModule { }
