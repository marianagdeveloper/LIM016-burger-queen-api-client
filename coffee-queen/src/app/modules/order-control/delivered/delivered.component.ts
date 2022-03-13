import { Component, OnInit } from '@angular/core';
import { Order } from '../../orders/order-list/order-list.metadata';
import { OrdersService } from '../../../data/services/api/orders.service';
import { UsersService } from 'src/app/data/services/api/users.service';

@Component({
  selector: 'app-delivered',
  templateUrl: './delivered.component.html',
  styleUrls: ['./delivered.component.scss']
})
export class DeliveredComponent implements OnInit {
  public orders: Order[] = [];
  public userId?:string;
  constructor(public ordersService: OrdersService,public userService: UsersService) { }

  ngOnInit(): void {
    this.ordersService.getOrder().subscribe((res: any) => {
      this.orders = res;
      return res;
    });
    //this.idPrueba = this.userService.disparador.getValue()._id;
    this.userId = sessionStorage.getItem('userId')?.toString();
  }

}
