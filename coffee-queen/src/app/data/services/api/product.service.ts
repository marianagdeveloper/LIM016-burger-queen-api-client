import { Injectable, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Product, Products } from 'src/app/shared/components/card/card-product/card-product.metadata';
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
    console.log('producto en servicio', producto);

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

  getAllProducts(): Observable<Product[]> { //product
    return this.http.get<Product[]>('https://coffeequeen3.herokuapp.com/products');
  }

  public post(body:any): Observable<Products[]> {
    return this.http.post<Products[]>('https://coffeequeen3.herokuapp.com/products',body); // POST
  }

  putProductApi(newProduct: any,idProduct:string): Observable<any[]>{
    console.log("id de product",idProduct);
    console.log("new de product",newProduct);
    return this.http.put<any[]>(`https://coffeequeen3.herokuapp.com/products/${idProduct}`, newProduct);

  }
  deleteProduct(idProduct: string): Observable<Product[]>{

  return this.http.delete<Product[]>(`https://coffeequeen3.herokuapp.com/products/${idProduct}`);

  }
}
/*  postProduct(newProduct: any){
    this.http.post<any[]>('http://localhost:3000/products', newProduct).subscribe( (res:any) => {
      return res;
    });
  } */
