import { Component, OnInit } from '@angular/core';
import { OrdersService } from './../../../data/services/api/orders.service';
import { Order } from 'src/app/modules/orders/order-list/order-list.metadata';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss']
})
export class SalesComponent implements OnInit {
  public orders: Order[] = [];
  constructor(public ordersService: OrdersService) { }
  public delivered = 'delivered';
  public getOrder: string = 'Entregado';
  ngOnInit(): void {
    this.ordersService.getOrder().subscribe((data) => {
      this.orders = data;
      this.translateStatus();
      console.log(this.orders)
      this.orders = this.orders?.filter((elem) =>(elem.status==this.getOrder))
    });
  }
  cutNameProduct(item: string ){
    return item.split(' ').splice(1, 4).toString().replace(/,+/g, ' ');
  }
  translateStatus(){
    this.orders.forEach( order => {
      if(order.status == 'pending'){
        order.status = 'Pendiente';
      }
      if(order.status == 'delivering'){
        order.status = 'En preparación';
      }
      if(order.status == 'done'){
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

}
