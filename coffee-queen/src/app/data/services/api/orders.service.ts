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
    return this.http.get<Order[]>('http://localhost:3000/order');
  }

  postOrder(newOrder: Order){
    this.http.post<Order[]>('http://localhost:3000/order', newOrder)
    .subscribe( (res:any) => {
      return res;
    });
  }

  putOrder(newOrder: Order, _idOrder:number){
    this.http.put<Order[]>(`http://localhost:3000/order/${_idOrder}`, newOrder)
    .subscribe( (res:any) => {
      console.log('res put', res);

      return res;
    });
  }

}
