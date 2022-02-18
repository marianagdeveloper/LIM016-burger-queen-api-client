import { Injectable } from '@angular/core';
import { Order } from '../../../modules/orders/order-list/order-list.metadata';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  public orders: Order[] = [];
  public ordersDelivering: Order[] = [];

  constructor(private http: HttpClient) { }

  get arrayOrders() {
    return [...this.orders];
  }

  setOrders(order: Order) {
    if (order.status == 'delivering') {
      this.ordersDelivering.push(order);
      console.log(this.ordersDelivering);
    }
  }

  postOrder(newOrder: Order){
    this.http.post<Order[]>('http://localhost:3000/order', newOrder)
    .subscribe( (res:any) => {
      return res;
    });
  }

  getOrder(): Observable<Order[]>{
    return this.http.get<Order[]>('http://localhost:3000/order');
  }
}
