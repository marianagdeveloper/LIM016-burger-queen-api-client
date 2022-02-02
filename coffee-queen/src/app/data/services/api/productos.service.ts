import { Injectable } from '@angular/core';
import { catchError, map,Observable } from 'rxjs';
import { Apiclass } from '../../schema/ApiClass.class';
//import {Product} from '../../../modules/product/product.module'
@Injectable({
  providedIn: 'root',
})
export class ProductosService extends Apiclass {
/*   getAllProducts(): Observable<{
    error: boolean;
    msg: string;
    data: Product[];
  }> {
    const response = { error: false, msg: '', data: null };
    return this.http.get<Product[]>(this.url + 'productos').pipe(
      map( res => {
        response.data = res;
        return response;
      }),
      catchError(this.error)
    );
  } */
}
