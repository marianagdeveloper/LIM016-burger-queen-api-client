import { Component, OnInit } from '@angular/core';
import { ProductService } from './../../../../data/services/api/product.service';
import { Product, Products } from './../../../../shared/components/card/card-product/card-product.metadata';

@Component({
  selector: 'app-drinks-list',
  templateUrl: './drinks-list.component.html',
  styleUrls: ['./drinks-list.component.scss']
})
export class DrinksListComponent implements OnInit {

  public products?: any[];
  public orderDrinks!: any[];
  constructor(public productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe((res) => {
      let arrayNew: any[] = [];
      res.filter((data: any) => {
        if (data.type === 'drinks') {
          arrayNew.push(data);
        }
      });
      this.products = arrayNew;
      this.orderDrinks = this.productService.arrayProducts;

      this.products.forEach((producto) => {
        this.orderDrinks.forEach((pedido: any) => {
          if (pedido.name == producto.name) {
            producto.qty = pedido.qty;
          }
        });
      });
    });
  }

}
