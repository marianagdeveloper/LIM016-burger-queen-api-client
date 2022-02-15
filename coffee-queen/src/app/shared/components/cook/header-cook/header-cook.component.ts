import { Component, OnInit, Input } from '@angular/core';
import { ILoginUsers } from '../../../../modules/login/login-user/login-user.metadata';
import { LoginService } from '../../../../data/services/api/login.service';

@Component({
  selector: 'app-header-cook',
  templateUrl: './header-cook.component.html',
  styleUrls: ['./header-cook.component.scss']
})
export class HeaderCookComponent implements OnInit {

  @Input() userData?: ILoginUsers[];
 public nameUser:any;
 public avatarUser:any;
  constructor(public loginService: LoginService) {
  }

  ngOnInit() {
    this.nameUser=this.loginService.disparador.getValue( ).name;
    this.avatarUser=this.loginService.disparador.getValue( ).avatar;

  }

}
