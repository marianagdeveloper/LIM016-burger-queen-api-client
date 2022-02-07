import { Component, OnInit, Input } from '@angular/core';
import { LoginService } from 'src/app/data/services/api/login.service';
import { ILoginUsers } from 'src/app/modules/login/login-user/login-user.metadata';
import {LoginUserComponent } from '../../../modules/login/login-user/login-user.component'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})


export class HeaderComponent implements OnInit {


  @Input() userData?: ILoginUsers[];

  constructor(public loginService: LoginService) {


    // console.log('LoginUserComponent', LoginUserComponent.arguments.userData);
  }

  ngOnInit() {
    // this.loginService.rolUser().subscribe(data => {
    //   this.userData = data;
    //   console.log(data);
    // });
    // console.log('LoginUserComponent', LoginUserComponent);
  }
}
