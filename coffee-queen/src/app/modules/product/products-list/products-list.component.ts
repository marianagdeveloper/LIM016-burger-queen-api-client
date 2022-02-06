import { HttpClient } from '@angular/common/http';
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
  constructor(public productService: ProductService) {}

  ngOnInit() {
    this.productService.getAllProducts().subscribe(data => {
      this.products = data;
      console.log(data);
      
    });
  }

}
