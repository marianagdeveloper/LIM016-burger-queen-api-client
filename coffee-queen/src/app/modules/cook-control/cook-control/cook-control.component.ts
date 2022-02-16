import { Component, OnInit, Input } from '@angular/core';
import { OrdersService } from '../../../data/services/api/orders.service';

import { Order } from '../../orders/order-list/order-list.metadata';

@Component({
  selector: 'app-cook-control',
  templateUrl: './cook-control.component.html',
  styleUrls: ['./cook-control.component.scss']
})
export class CookControlComponent implements OnInit {

  public orders?: Order[];
  public orderDelivering?: Order[];

  constructor(public ordersService: OrdersService) { }

  ngOnInit(): void {
    this.ordersService.getOrder().subscribe((data) => {
      this.orders = data;
    });
    this.orderDelivering = this.ordersService.arrayOrders;
    console.log(this.orderDelivering);

  }
  navigateToSection(section: string) {
    window.location.hash = '';
    window.location.hash = section;
  }

}
