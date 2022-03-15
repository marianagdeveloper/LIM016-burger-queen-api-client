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
import { User } from '../../users-control/user-control/user-control.metadata';


@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.scss'],
})
export class LoginUserComponent implements OnInit {

  public htmlStr: string = '';
  public userData2: any;
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
    const credentials = {
      email: emailUser,
      password: passwordUser
    }
    this.userService.getTokenAuth(credentials).subscribe((res)=>{
      sessionStorage.setItem('token',(res.token))
        this.userService.getUserByEmail(emailUser).subscribe((res) =>{

          if (res.roles.admin) {
          this.router.navigate(['product']);
        } else if (res.roles.cook) {
          this.router.navigate(['cook-control']);
        } else if (res.roles.waiter) {
          this.router.navigate(['product']);
        }
        this.userData2=res;

        this.saveUserDataOnSessionStorage(this.userData2)
      })
    })
  }

  saveUserDataOnSessionStorage(userData: User){
    sessionStorage.setItem('nameUser',userData.nameUser);
    sessionStorage.setItem("imageUser",userData.image);
    sessionStorage.setItem("roleAdmin", userData.roles.admin.toString());
    sessionStorage.setItem("roleCook", userData.roles.cook.toString());
    sessionStorage.setItem("roleWaiter", userData.roles.waiter.toString());
    sessionStorage.setItem("userId", userData._id);
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
