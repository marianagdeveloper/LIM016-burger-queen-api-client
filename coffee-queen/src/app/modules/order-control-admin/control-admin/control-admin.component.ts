import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-control-admin',
  templateUrl: './control-admin.component.html',
  styleUrls: ['./control-admin.component.scss']
})
export class ControlAdminComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.navigate(['order-control-admin/pending']);
  }

}
