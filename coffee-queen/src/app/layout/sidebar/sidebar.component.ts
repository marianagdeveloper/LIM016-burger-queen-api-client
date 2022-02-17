import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../data/services/api/login.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  public rolesUser:any;
  constructor(public loginService: LoginService) { }

  ngOnInit(): void {
    this.rolesUser=this.loginService.disparador.getValue( ).roles;
  }
  flag = false;

  cambiarFlag(){
    this.flag = !this.flag;
  }

}
