import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs'
import { ICardProduct } from 'src/app/shared/components/card/card-product/card-product.metadata';

@Injectable({
  providedIn: 'root'
})
export class ProductService{

  constructor(private http: HttpClient) {}

  // Consume la API de users y devuelve un observable a la respuesta
  getAllProducts(): Observable<ICardProduct[]>{
    // fetch('url', {method: GET})
    return this.http.get<ICardProduct[]>('http://localhost:3000/products');
  }

}
