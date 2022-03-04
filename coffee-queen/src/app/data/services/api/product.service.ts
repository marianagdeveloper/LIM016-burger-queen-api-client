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

  public products: any[] = [];
  public prueba = {
    qty: 0,
    subTotal: 0,
    product: {
      _id: '',
      name: '',
      price: 0,
      image: '',
      type: '',
      dateEntry: ''
    }
  };

  get arrayProducts() {
    return [...this.products];
  }

  setProducts(producto: any, flag?: string) {
    if (flag == 'delete') {
      const data = this.products.filter(
        (item: any) => item.name != producto.name
      );
      this.products = data
    }
    else {
      /* this.prueba.product._id = producto.product._id;
      this.prueba.product.name = producto.name;
      this.prueba.product.price = producto.price;
      this.prueba.product.image = producto.image;
      this.prueba.product.type = producto.type;
      this.prueba.product.dateEntry = producto.dateEntry;
      this.prueba.qty = producto.qty;
      this.prueba.subTotal = producto.subTotal; */
      this.products.push(producto);

    }
  }

  constructor(private http: HttpClient) {}
  getAllProducts(): Observable<Products[]> {
    return this.http.get<Products[]>('https://coffeequeen3.herokuapp.com/products');
  }

  public post(body:any): Observable<Product[]> {
    return this.http.post<Product[]>('https://coffeequeen3.herokuapp.com/products',body); // POST
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
