import { Component, OnInit } from '@angular/core';
import { ILoginUser } from './login-user.metadata';
import { LoginService } from './../../../data/services/api/login.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.scss'],
})
export class LoginUserComponent implements OnInit {
  public users: ILoginUser = {
    email: '',
    password: '',
  };

  public loginForm!: FormGroup;
  constructor(private formBuilder : FormBuilder, public loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group(this.users)
  }

  getUserCredentials() {
    this.loginService.login().subscribe( res => {
      const credentials = res.find((a:any) => {
        return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password
      });
      if (credentials){
        alert("Login success");
        this.loginForm.reset();
        this.router.navigate(['panel/product']);
      }else{
        alert("user not found");
      }
    });
  }
  /*constructor(public loginService: LoginService) {}

  login() {
    const user = { email: this.users?.email, password: this.users?.password };
    this.loginService.login(user).subscribe((data) => {
      console.log(data);
    });
  } */
}
