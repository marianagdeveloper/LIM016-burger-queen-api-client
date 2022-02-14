import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/data/services/api/users.service';
import { User } from './user-control.metadata';

@Component({
  selector: 'app-user-control',
  templateUrl: './user-control.component.html',
  styleUrls: ['./user-control.component.scss']
})
export class UserControlComponent implements OnInit {
  public users!: User[];
  constructor(public userService: UsersService) { }

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe((data:any) => {
      this.users = data;
console.log(data);

    });
  }

}
