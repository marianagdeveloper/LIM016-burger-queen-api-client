import { EventEmitter, Injectable, Output } from '@angular/core';
import { Order, OrderRecive } from '../../../modules/orders/order-list/order-list.metadata';
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

  getOrder(): Observable<OrderRecive[]>{
    return this.http.get<OrderRecive[]>('https://coffeequeen3.herokuapp.com/orders');
  }

  postOrder(newOrder: any): Observable<any[]>{
    return this.http.post<any[]>('https://coffeequeen3.herokuapp.com/orders', newOrder);
  }

  putOrder(newOrder: OrderRecive, _idOrder:string): Observable<OrderRecive[]>{
    return this.http.put<OrderRecive[]>(`https://coffeequeen3.herokuapp.com/orders/${_idOrder}`, newOrder);
  }

}
