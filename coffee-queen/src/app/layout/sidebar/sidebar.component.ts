import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/data/services/api/users.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  public rolesUser:any;
  invalidRoleCook=false;
  constructor(public usersServices: UsersService, private router: Router) { }

  ngOnInit(): void {
    this.rolesUser=this.usersServices.disparador.getValue( ).roles;
    /* if (this.rolesUser == undefined) {
      this.router.navigate(['login']);
    } else { */
      this.invalidRoleCook = !this.rolesUser.cook;
    //}

  }
  flag = false;

  cambiarFlag(){
    this.flag = !this.flag;
  }

}
