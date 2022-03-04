import { Component, OnInit } from '@angular/core';
import { ProductService } from './../../../../data/services/api/product.service';
import { Product, Products } from './../../../../shared/components/card/card-product/card-product.metadata';

@Component({
  selector: 'app-drinks-list',
  templateUrl: './drinks-list.component.html',
  styleUrls: ['./drinks-list.component.scss']
})
export class DrinksListComponent implements OnInit {

  public products?: Products[];
  public orderDrinks!: Products[];
  constructor(public productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe((res) => {
      let arrayNew: Products[] = [];
      res.filter((data: Products) => {
        if (data.product.type === 'drinks') {
          arrayNew.push(data);
        }
      });
      this.products = arrayNew;
      this.orderDrinks = this.productService.arrayProducts;

      this.products.forEach((producto) => {
        this.orderDrinks.forEach((pedido: Products) => {
          if (pedido.product.name == producto.product.name) {
            producto.qty = pedido.qty;
          }
        });
      });
    });
  }

}
