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
  public urlAPI: string = 'https://coffeequeen3.herokuapp.com';
  constructor(private http: HttpClient) { }

  getOrder(): Observable<OrderRecive[]>{
    return this.http.get<OrderRecive[]>(this.urlAPI + '/orders');
  }

  postOrder(newOrder: any): Observable<any[]>{
    return this.http.post<any[]>(this.urlAPI + '/orders', newOrder);
  }

  putOrder(newOrder: OrderRecive, _idOrder:string): Observable<OrderRecive[]>{
    return this.http.put<OrderRecive[]>(this.urlAPI + `/orders/${_idOrder}`, newOrder);
  }

}
