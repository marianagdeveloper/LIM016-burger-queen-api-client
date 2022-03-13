import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/data/services/api/users.service';
import { OrdersService } from '../../../data/services/api/orders.service';
import { Order } from '../../orders/order-list/order-list.metadata';

@Component({
  selector: 'app-pending',
  templateUrl: './pending.component.html',
  styleUrls: ['./pending.component.scss'],
})
export class PendingComponent implements OnInit {
  public orders: Order[] = [];
  public userId?:string;
  constructor(public ordersService: OrdersService,public userService: UsersService ) {}

  ngOnInit(): void {
    this.ordersService.getOrder().subscribe((res: any) => {
      this.orders = res;
      return this.orders;
    });
    this.userId = sessionStorage.getItem('userId')?.toString();
  }
}
