import { Injectable, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Product } from 'src/app/shared/components/card/card-product/card-product.metadata';
import { Order } from '../../../modules/orders/order-list/order-list.metadata';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  @Output() disparadorProduct: BehaviorSubject<any> = new BehaviorSubject({});

  public products: Product[] = [];
  public orders: Order[] = [];

  get arrayProducts() {
    return [...this.products];
  }

   setProducts(producto: Product, flag?: string) {
    if (flag == 'delete') {
      const data = this.products.filter(
        (item: any) => item.name != producto.name
      );
      this.products = data
    }
    else {
      this.products.push(producto);
    }
  }

  constructor(private http: HttpClient) {}
  // Consume la API de users y devuelve un observable a la respuesta
  getAllProducts(): Observable<Product[]> {
    // fetch('url', {method: GET})
    return this.http.get<Product[]>('http://localhost:3000/products');
  }

  postOrder(newOrder: Order){
    this.http.post<Order[]>('http://localhost:3000/order', newOrder)
    .subscribe( (res:any) => {
      // console.log('postorder', res);

      return res;
    });
  }

  getOrder(){
    return this.http.get<Order[]>('http://localhost:3000/order');
  }
}
