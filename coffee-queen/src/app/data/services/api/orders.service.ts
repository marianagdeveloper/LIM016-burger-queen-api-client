import { EventEmitter, Injectable, Output } from '@angular/core';
import { Order } from '../../../modules/orders/order-list/order-list.metadata';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  @Output() dispatchStatusOrder : EventEmitter<any> = new EventEmitter()

  public orders: Order[] = [];
  public ordersDelivering: Order[] = [];

  constructor(private http: HttpClient) { }

  getOrder(): Observable<Order[]>{
    return this.http.get<Order[]>('https://coffeequeen3.herokuapp.com/orders');
  }

  postOrder(newOrder: Order): Observable<Order[]>{
    return this.http.post<Order[]>('http://localhost:3000/order', newOrder);
  }

  putOrder(newOrder: Order, _idOrder:string): Observable<Order[]>{
    return this.http.put<Order[]>(`http://localhost:3000/order/${_idOrder}`, newOrder);
  }

}
