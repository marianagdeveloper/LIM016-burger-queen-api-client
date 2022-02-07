import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginUserComponent } from './login-user/login-user.component';
//import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MdHeaderModule } from 'src/app/layout/md-header/md-header.module';
import { HeaderComponent } from 'src/app/layout/md-header/header/header.component';



@NgModule({
  declarations: [
    LoginUserComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MdHeaderModule
  ]
})
export class LoginModule { }
