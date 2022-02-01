import { Component, OnInit } from '@angular/core';
import { ProductosService } from './../../../../data/services/api/productos.service';


@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  public products: ArrayProducts[];

  constructor(
    private productService:ProductosService
  ) {
    this.productService.getAllProducts().subscribe(r=>{
      if(!r.error){
        this.products=r.data;
      }
    })
  }

  ngOnInit(): void {
  }

}
