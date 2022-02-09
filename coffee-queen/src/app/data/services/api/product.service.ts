import { Injectable, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { ICardProduct } from 'src/app/shared/components/card/card-product/card-product.metadata';
//import { ICardProduct } from './../../../shared/components/card/card-product/card-product.metadata';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  @Output() disparadorProduct: BehaviorSubject<any> = new BehaviorSubject({});

  public products: ICardProduct[] = [];
  public newProducts: ICardProduct[] = [];
  public newEliminados: ICardProduct[] = [];
  public total: number = 0;
  get arrayProducts() {
    return [...this.products];
  }

  setProducts(products: ICardProduct) {
    this.products.push(products);
  }









  
  //aqui obtenemos el new array Product del componente cart :D

  get newArrayProducts() {
    return [...this.newProducts];
  }

  setNewProducts(newProducts: ICardProduct) {
    this.newProducts.push(newProducts);
    console.log(newProducts);
  }
  //-----------------------------------------------------
  get eliminadosProducts() {
    console.log([...this.newEliminados]);

    return [...this.newEliminados];
  }

  setEliminadosProducts(newEliminados: ICardProduct) {
    this.newEliminados.push(newEliminados);
    console.log(newEliminados);
  }
  constructor(private http: HttpClient) {}

  // Consume la API de users y devuelve un observable a la respuesta
  getAllProducts(): Observable<ICardProduct[]> {
    // fetch('url', {method: GET})
    return this.http.get<ICardProduct[]>('http://localhost:3000/products');
  }
}
