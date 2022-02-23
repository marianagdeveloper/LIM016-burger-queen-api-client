import { Component, OnInit } from '@angular/core';
import { ILoginUsers } from './login-user.metadata';
import { LoginService } from './../../../data/services/api/login.service';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.scss'],
})
export class LoginUserComponent implements OnInit {

  public htmlStr: string = '';
  public userData: ILoginUsers = {
    name: '',
    email: '',
    roles: {
      admin: false,
      cook: false,
      waiter: true,
    },
    avatar: ''
  };
  public loginForm!: FormGroup;
  public dataUser: any;

  constructor(
    private formBuilder: FormBuilder,
    public loginService: LoginService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  getDataUser(userValidate:any) {
    this.loginService.rolUser().subscribe((res) => {
      let rol = res.filter((a: any) => {
        if (a.email == userValidate) {
          this.userData.name = a.name;
          this.userData.email = a.email;
          this.userData.roles = a.roles;
          this.userData.avatar = a.avatar;
          return a.roles;
        }
      });
      if (rol[0].roles.admin) {
        this.router.navigate(['product']);
      } else if (rol[0].roles.cook) {
        this.router.navigate(['cook-control']);
      } else if (rol[0].roles.waiter) {
        this.router.navigate(['product']);
      }
      this.loginService.disparador.next(this.userData);

    });

  }

  getUserCredentials() {
    this.loginService.login().subscribe((res) => {
      let userValidate: any;
      const credentials = res.find((a: any) => {
        const emailUser = this.loginForm.value.email;
        const passwordUser = this.loginForm.value.password;
        if (a.email === emailUser && a.password === passwordUser) {
          userValidate = a.email;
        }
        return a.email === emailUser && a.password === passwordUser;
      });

      if (credentials) {
        this.getDataUser(userValidate);

      } else {
        this.htmlStr = '*Usuario y/o contraseña inválidos.';
      }
    });
  }

  campoEsValido(inputForm: string) {
    return (
      this.loginForm.controls[inputForm].dirty &&
      this.loginForm.hasError('required', inputForm)
    );
  }

  get campoEmail(): { [key: string]: AbstractControl } {
    return this.loginForm.controls;
  }

  limpiar() {
    this.htmlStr = '';
  }

  /*public users: ILoginUser = {
    email: '',
    password: '',
  };
  constructor(public loginService: LoginService) {}

  login() {
    const user = { email: this.users?.email, password: this.users?.password };
    this.loginService.login(user).subscribe((data) => {
      console.log(data);
    });
  } */
}
