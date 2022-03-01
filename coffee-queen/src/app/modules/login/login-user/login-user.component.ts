import { Component, OnInit } from '@angular/core';
import { ILoginUsers } from './login-user.metadata';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/data/services/api/users.service';
import { HttpHeaders } from '@angular/common/http';


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

  public isCheck: any;
  public isGetUser: any;
  public headers!:any;
  constructor(
    private formBuilder: FormBuilder,
    public userService: UsersService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }


  getUserCredentials():any {
    this.isCheck = { user: 'checked'}
    const emailUser = this.loginForm.value.email;
    const passwordUser = this.loginForm.value.password;
    const credential = {
      email: emailUser,
      password: passwordUser
    }

    this.userService.getAllUsersAuth(credential).subscribe((token) => {
      sessionStorage.setItem('token', token);

      const tokenStorage = sessionStorage.getItem('token');
      this.headers = new HttpHeaders({'authorization': `Bearer ${tokenStorage}` });
      console.log(' get tokenStorage',tokenStorage);
      console.log('headers',this.headers);


      this.userService.getAllUsersPrueba({ 'headers': this.headers }).subscribe( (res) => {
        console.log(res);
      })
      /* let userValidate: any;
      const credentials = res.find((a: any) => {
        const emailUser = this.loginForm.value.email;
        const passwordUser = this.loginForm.value.password;
        if (a.email === emailUser && a.password === passwordUser) {
          userValidate = a.email;
        }
        return a.email === emailUser && a.password === passwordUser;
      });

      if (credentials) {
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
            this.userService.disparador.next(this.userData);

      } else {
        this.htmlStr = '*Usuario y/o contraseña inválidos.';
      }

      this.isGetUser = this.userData;
      return this.isGetUser */
      console.log(token);

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

}
