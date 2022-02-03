import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../data/services/api/product.service';
import { ICardProduct } from '../../../shared/components/card/card-product/card-product.metadata';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  public products?: ICardProduct[]; /* = [
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
  ]; */

  // public products: ArrayProducts[];

  /* constructor(
    private productService: ProductService
  ) {
    this.productService.getAllProducts().subscribe(r=>{
      if(!r.error){
        this.products=r.data;
      } else{
        console.log(`Aqui${r.error}`);

      }
    })
  } */

  ngOnInit(): void {
  }

}
