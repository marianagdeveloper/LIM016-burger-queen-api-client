import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ILoginUsers } from 'src/app/modules/login/login-user/login-user.metadata';
import {LoginUserComponent } from '../../modules/login/login-user/login-user.component'
import { UsersService } from 'src/app/data/services/api/users.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})


export class HeaderComponent implements OnInit {


  @Input() userData?: ILoginUsers[];
 public nameUser:any;
 public avatarUser:any;
 public rolesUser:any;
 roleCook = false;
 roleWaiter = false;
 roleAdmin = false;

  constructor(public usersServices: UsersService,  private router: Router) {
  }

  ngOnInit() {
    this.nameUser=this.usersServices.disparador.getValue( ).nameUser;
    this.avatarUser=this.usersServices.disparador.getValue( ).image;
    this.rolesUser=this.usersServices.disparador.getValue( ).roles;
    console.log("rol",this.rolesUser);

/*
   if (this.rolesUser == undefined) {
      this.router.navigate(['login']);
    } else { */
      this.roleCook = this.rolesUser.cook;
      this.roleWaiter = this.rolesUser.waiter;
      this.roleAdmin = this.rolesUser.admin;
    //}

  }
  logout(){
    this.usersServices.removeToken();
    this.router.navigate(['login'])
  }
}
/* {
  provide: HTTP_INTERCEPTORS,
  useClass: AuthInterceptor,
  multi:true
}, */
