import { Component, OnInit } from '@angular/core';
// import { ProductosService } from '../../../data/services/api/productos.service';
import { ICardProduct } from '../../../shared/components/card/card-product/card-product.metadata';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  public products: ICardProduct[] = [
    {
    name: "Cafe Americano",
    price: 7,
    image: "../../../../../assets/images/cafe_americano.jpg"
    },
    {
      name: "Cafe Con Leche",
      price: 15,
      image: "../../../../../assets/images/cafe_leche.jpg"
    },
    {
      name: "Cafe Con Leche",
      price: 7,
      image: "../../../../../assets/images/cafe_leche.jpg"
    },
    {
      name: "Cafe Con Leche",
      price: 10,
      image: "../../../../../assets/images/cafe_leche.jpg"
    },
  ];

  /* public products: ArrayProducts[];

  constructor(
    private productService: ProductosService
  ) {
    this.productService.getAllProducts().subscribe(r=>{
      if(!r.error){
        this.products=r.data;
      }
    })
  }
  titulo="mili";
*/
  constructor() { }

  ngOnInit(): void {
  }

}
