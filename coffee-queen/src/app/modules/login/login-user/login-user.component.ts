import { Component, OnInit } from '@angular/core';
import { ILoginUser } from './login-user.metadata';
import { LoginService } from './../../../data/services/api/login.service';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.scss']
})
export class LoginUserComponent {
   public users:  ILoginUser = {
     email: '',
     password: ''
   }
  
   constructor(public loginService: LoginService) {}
 
   login() {
     const user = {email: this.users?.email, password: this.users?.password};
     this.loginService.login(user).subscribe( data => {
       console.log(data);
     });
   }
}
