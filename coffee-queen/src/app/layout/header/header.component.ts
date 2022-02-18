import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/data/services/api/login.service';
import { ILoginUsers } from 'src/app/modules/login/login-user/login-user.metadata';
import {LoginUserComponent } from '../../modules/login/login-user/login-user.component'
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
  constructor(public loginService: LoginService,  private router: Router) {
  }

  ngOnInit() {
    this.nameUser=this.loginService.disparador.getValue( ).name;
    this.avatarUser=this.loginService.disparador.getValue( ).avatar;
    this.rolesUser=this.loginService.disparador.getValue( ).roles;

    if (this.rolesUser == undefined) {
      this.router.navigate(['login']);
    }
  }
}
