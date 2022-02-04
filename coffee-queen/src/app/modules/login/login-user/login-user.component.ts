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
  constructor(
    private formBuilder: FormBuilder,
    public loginService: LoginService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group(this.users);
  }

  getUserCredentials() {
    this.loginService.login().subscribe((res) => {
      let userValidate: any;
      const credentials = res.find((a: any) => {
        const emailUser =  this.loginForm.value.email;
        const passwordUser =  this.loginForm.value.password;
        if (a.email === emailUser && a.password === passwordUser) {
          userValidate = a.email;
        }
        return a.email === emailUser && a.password === passwordUser
      });
      if (credentials) {
        alert('Login success');
        this.loginForm.reset();

        this.loginService.rolUser().subscribe((res) => {
          let rol = res.filter((a: any) => {
            if (a.email == userValidate) {
              return a.roles;
            }
          });

          if (rol[0].roles.admin) {
            alert('Rol Admin');
            this.router.navigate(['panel/product']);
          } else if (rol[0].roles.cook) {
            alert('Rol Cocinero');
            this.router.navigate(['panel/product']);
          } else if (rol[0].roles.waiter) {
            alert('Rol Mesero');
            this.router.navigate(['panel/product']);
          }
        });
      } else {
        alert('Usuario y/o contraseña inválido');
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
