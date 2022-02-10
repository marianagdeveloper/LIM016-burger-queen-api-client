import { Injectable, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { ICardProduct } from 'src/app/shared/components/card/card-product/card-product.metadata';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  @Output() disparadorProduct: BehaviorSubject<any> = new BehaviorSubject({});

  public products: ICardProduct[] = [];

  get arrayProducts() {
    return [...this.products];
  }

  setProducts(producto: ICardProduct, flag?: string) {
    if (flag == 'delete') {
      const data = this.products.filter(
        (item: any) => item.name != producto.name
      );
      this.products = data
    } /* if (flag == 'update') {
      console.log(producto);

      let hash: any;
      const data = this.products.filter( (o: any) => {
        console.log('este es el hash',o.name);

        //hash[o.name] ? false : hash[o.name] = true
      });
      console.log(data); */
      /* var array = [
        {id:1,nombre:'casa'},
        {id:2,nombre:'fruta'},
        {id:3,nombre:'mascotas'},
        {id:1,nombre:'casa'},
        {id:2,nombre:'fruta'},
        {id:4,nombre:'cosas'},
        {id:5,nombre:'otros'}
      ];

      let hash = {};
      array = array.filter(o => hash[o.id] ? false : hash[o.id] = true);
      console.log(JSON.stringify(array));

      //this.products = data
      console.log(data); */



    //}
    else {
      this.products.push(producto);
    }
  }
//-------------------------------------

/* get filterProducts() {
  return [...this.products];
}

setFilterProducts(producto: ICardProduct, flag?: string) {
  if (flag == 'delete') {
    const data = this.products.filter(
      (item: any) => item.name != producto.name
    );
    this.products = data
  } else {
    this.products.push(producto);
  }
}
 */

  constructor(private http: HttpClient) {}
  // Consume la API de users y devuelve un observable a la respuesta
  getAllProducts(): Observable<ICardProduct[]> {
    // fetch('url', {method: GET})
    return this.http.get<ICardProduct[]>('http://localhost:3000/products');
  }
}
