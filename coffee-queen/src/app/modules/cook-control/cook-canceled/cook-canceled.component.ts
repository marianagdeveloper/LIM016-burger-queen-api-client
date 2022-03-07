import { Component, OnInit } from '@angular/core';
import { Order, OrderRecive } from '../../orders/order-list/order-list.metadata';
import { OrdersService } from '../../../data/services/api/orders.service';

@Component({
  selector: 'app-cook-canceled',
  templateUrl: './cook-canceled.component.html',
  styleUrls: ['./cook-canceled.component.scss']
})
export class CookCanceledComponent implements OnInit {
  public orders: OrderRecive[] = [];
  constructor(public ordersService: OrdersService) { }

  ngOnInit(): void {
    this.ordersService.getOrder().subscribe((data) => {
      this.orders = data;
    });
  }

}
