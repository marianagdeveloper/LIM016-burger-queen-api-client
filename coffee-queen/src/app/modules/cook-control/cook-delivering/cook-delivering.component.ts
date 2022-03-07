import { Component, OnInit } from '@angular/core';
import { Order, OrderRecive } from '../../orders/order-list/order-list.metadata';
import { OrdersService } from '../../../data/services/api/orders.service';

@Component({
  selector: 'app-cook-delivering',
  templateUrl: './cook-delivering.component.html',
  styleUrls: ['./cook-delivering.component.scss']
})
export class CookDeliveringComponent implements OnInit {
  public orders: OrderRecive[] = [];
  constructor(public ordersService: OrdersService) { }

  ngOnInit(): void {
    this.ordersService.getOrder().subscribe((data) => {
      this.orders = data;
    });
  }

}
