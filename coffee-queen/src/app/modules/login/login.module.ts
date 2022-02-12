import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoginUserComponent } from './login-user/login-user.component';

@NgModule({
  declarations: [
    LoginUserComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

  ]
})
export class LoginModule { }
