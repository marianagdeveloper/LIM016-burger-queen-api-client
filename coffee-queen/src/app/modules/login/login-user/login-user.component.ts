import { Component, OnInit } from '@angular/core';
import { ILoginUser, ILoginUsers } from './login-user.metadata';
import { LoginService } from './../../../data/services/api/login.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { HeaderComponent } from '../../../layout/md-header/header/header.component'

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

  public userData: ILoginUsers = {
    name: '',
    email: '',
    roles: {
      admin: false,
      cook: false,
      waiter: true,
    }
  };

  public loginForm!: FormGroup;

  constructor(

    private formBuilder: FormBuilder,
    public loginService: LoginService,
    private router: Router
  ) {
    this.getNameUser();
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group(this.users);
  }

  getNameUser (){
    this.loginService.rolUser().subscribe((res) => {
      let userValidate: any;
      res.filter((a: any) => {
        if (a.email == userValidate) {
          this.userData.name = a.name;
          this.userData.email = a.email;
          this.userData.roles = a.roles;
          // console.log('this.userData into filter', this.userData);
        }
      });
      console.log('this.userData', this.userData);
      return this.userData;
    })

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
              this.userData.name = a.name;
              this.userData.email = a.email;
              this.userData.roles = a.roles;
              // console.log('this.userData into filter', this.userData);
              return a.roles;
            }
          });
          // this.getNameUser(userValidate)
          // console.log('this.userData', this.userData);
          if (rol[0].roles.admin) {
            alert('Rol Admin');
            this.router.navigate(['product']);
          } else if (rol[0].roles.cook) {
            alert('Rol Cocinero');
            this.router.navigate(['product']);
          } else if (rol[0].roles.waiter) {
            alert('Rol Mesero');
            this.router.navigate(['product']);
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
