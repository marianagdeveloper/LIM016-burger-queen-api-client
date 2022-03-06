import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../../../data/services/api/orders.service';
import { Order } from '../../orders/order-list/order-list.metadata';

@Component({
  selector: 'app-pending',
  templateUrl: './pending.component.html',
  styleUrls: ['./pending.component.scss'],
})
export class PendingComponent implements OnInit {
  public orders: Order[] = [];
  constructor(public ordersService: OrdersService) {}

  ngOnInit(): void {
    this.ordersService.getOrder().subscribe((res: any) => {
      this.orders = res;

      return this.orders;
    });
  }
}
