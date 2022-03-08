import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/data/services/api/orders.service';
import { OrderRecive } from '../../orders/order-list/order-list.metadata';
import { UsersService } from '../../../data/services/api/users.service';

@Component({
  selector: 'app-canceled-admin',
  templateUrl: './canceled-admin.component.html',
  styleUrls: ['./canceled-admin.component.scss']
})
export class CanceledAdminComponent implements OnInit {
  public orders: OrderRecive[] = [];
  public pruebaId: string='';
  constructor(
    public ordersService: OrdersService,
    public userService: UsersService
  ) {}
  ngOnInit(): void {
    this.ordersService.getOrder().subscribe((data) => {
      this.orders = data;
      this.orders.map((ele) => {
        this.userService.getUserByEmail(ele.userId).subscribe((res) => {
            ele.userId=res.nameUser;
          });
      });
    });
  }
  cutNameProduct(item: string ){
    return item.split(' ').splice(1, 4).toString().replace(/,+/g, ' ');
  }

}
