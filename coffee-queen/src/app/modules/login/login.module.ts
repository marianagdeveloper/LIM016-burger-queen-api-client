import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { LoginUserComponent } from './login-user/login-user.component';
import { AuthInterceptor } from 'src/app/data/services/interceptor/auth.interceptor';

@NgModule({
  declarations: [
    LoginUserComponent
  ],
  imports: [
CommonModule,
    FormsModule,
    ReactiveFormsModule,

  ],

})
export class LoginModule { }
