import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/data/services/api/orders.service';
import { OrderRecive } from '../../orders/order-list/order-list.metadata';

@Component({
  selector: 'app-delivered-admin',
  templateUrl: './delivered-admin.component.html',
  styleUrls: ['./delivered-admin.component.scss']
})
export class DeliveredAdminComponent implements OnInit {

  public orders: OrderRecive[] = [];
  constructor(public ordersService: OrdersService) { }
  ngOnInit(): void {
    this.ordersService.getOrder().subscribe((data) => {
      this.orders = data;
    });
  }
  cutNameProduct(item: string ){
    return item.split(' ').splice(1, 4).toString().replace(/,+/g, ' ');
  }
}
