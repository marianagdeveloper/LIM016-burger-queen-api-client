import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/data/services/api/orders.service';
import { OrderRecive } from '../../orders/order-list/order-list.metadata';

@Component({
  selector: 'app-done-admin',
  templateUrl: './done-admin.component.html',
  styleUrls: ['./done-admin.component.scss']
})
export class DoneAdminComponent implements OnInit {

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
