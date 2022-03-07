import { Component, OnInit, Input } from '@angular/core';
import { OrdersService } from '../../../data/services/api/orders.service';

import { Order, OrderRecive } from '../../orders/order-list/order-list.metadata';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cook-control',
  templateUrl: './cook-control.component.html',
  styleUrls: ['./cook-control.component.scss']
})
export class CookControlComponent implements OnInit {

  public orders: OrderRecive[] = [];

  constructor(public ordersService: OrdersService, private router: Router) { }

  ngOnInit(): void {
    this.ordersService.getOrder().subscribe((data) => {
      this.orders = data;
    });
    this.router.navigate(['cook-control/pending']);
  }
}
