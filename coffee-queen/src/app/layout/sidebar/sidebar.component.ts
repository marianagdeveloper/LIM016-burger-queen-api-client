import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../data/services/api/login.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  public rolesUser:any;
  invalidRoleCook=false;
  constructor(public loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
    this.rolesUser=this.loginService.disparador.getValue( ).roles;
    if (this.rolesUser == undefined) {
      this.router.navigate(['login']);
    } else {
      this.invalidRoleCook = !this.rolesUser.cook;
    }

  }
  flag = false;

  cambiarFlag(){
    this.flag = !this.flag;
  }

}
