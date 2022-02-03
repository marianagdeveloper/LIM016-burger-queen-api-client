import { Component, OnInit } from '@angular/core';
import { ILoginUser } from './login-user.metadata';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.scss']
})
export class LoginUserComponent implements OnInit {
   public users:  ILoginUser ={
     email: '',
     password: ''
   }

  constructor() { }

  ngOnInit(): void {
  }

  login() {
    console.log(this.users.email);
    console.log(this.users.password);
  }

}
