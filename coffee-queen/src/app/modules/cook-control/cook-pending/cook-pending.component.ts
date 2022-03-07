import { Component, OnInit } from '@angular/core';
import { Order, OrderRecive } from '../../orders/order-list/order-list.metadata';
import { OrdersService } from '../../../data/services/api/orders.service';

@Component({
  selector: 'app-cook-pending',
  templateUrl: './cook-pending.component.html',
  styleUrls: ['./cook-pending.component.scss']
})
export class CookPendingComponent implements OnInit {
  public orders: OrderRecive[] = [];
  constructor(public ordersService: OrdersService) { }

  ngOnInit(): void {
    this.ordersService.getOrder().subscribe((data) => {
      this.orders = data;
    });
  }

}
