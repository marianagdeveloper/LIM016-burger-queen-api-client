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
  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('http://localhost:3000/products');
  }

  public post(url:string, body:any): Observable<Product[]> {
    return this.http.post<Product[]>(url,body); // POST  
  }
  putProduct(newProduct: any,idProduct:number): Observable<Product[]>{
    return this.http.put<any[]>(`http://localhost:3000/products/${idProduct}`, newProduct);
    
  }
  deleteProduct(idProduct: number): Observable<Product[]>{
   return this.http.delete<Product[]>(`http://localhost:3000/products/${idProduct}`);
  }
}
/*  postProduct(newProduct: any){
    this.http.post<any[]>('http://localhost:3000/products', newProduct).subscribe( (res:any) => {
      return res;
    });
  } */
