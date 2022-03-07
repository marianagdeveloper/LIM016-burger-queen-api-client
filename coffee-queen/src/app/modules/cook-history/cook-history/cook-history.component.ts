import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../../../data/services/api/orders.service';

import { Order } from '../../orders/order-list/order-list.metadata';

@Component({
  selector: 'app-cook-history',
  templateUrl: './cook-history.component.html',
  styleUrls: ['./cook-history.component.scss']
})
export class CookHistoryComponent implements OnInit {
  public orders: Order[] = [];
  public reversedListOrder: Order[] = [];
  public getOrder: string = '';
  public clean: string = '';

  constructor(public ordersService: OrdersService) { }

  ngOnInit(): void {
    this.ordersService.getOrder().subscribe((data) => {
      this.orders = data;
      this.translateStatus();
    });
  }
  translateStatus(){
    this.orders.forEach( order => {
      if(order.status == 'pending'){
        order.status = 'Pendiente';
      }
      if(order.status == 'delivering'){
        order.status = 'En preparación';
      }
      if(order.status == 'preparing'){
        order.status = 'Preparado';
      }
      if(order.status == 'delivered'){
        order.status = 'Entregado';
      }
      if(order.status == 'canceled'){
        order.status = 'Cancelado';
      }
    })
  }
  cutNameProduct(item: string ){
    return item.split(' ').splice(1, 4).toString().replace(/,+/g, ' ');
  }
  searchStatus() {
    this.ordersService.getOrder().subscribe((data) => {
      if(this.getOrder===""){
        this.orders = data;
        this.translateStatus();
      }else{
        this.orders = data;
        this.translateStatus();
        this.orders = this.orders?.filter(
        (elem) => elem.status.toLowerCase().indexOf(this.getOrder) > -1
      );
    }
    });
  }
  cleanSearch(){
    this.ordersService.getOrder().subscribe((data) => {
      this.orders = data;
      this.translateStatus();
    });
    this.getOrder='';
  }
}
