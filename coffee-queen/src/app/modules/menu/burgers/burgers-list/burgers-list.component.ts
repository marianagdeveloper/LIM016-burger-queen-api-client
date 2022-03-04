import { Component, OnInit } from '@angular/core';
import { ProductService } from './../../../../data/services/api/product.service';
import { Product, Products } from './../../../../shared/components/card/card-product/card-product.metadata';

@Component({
  selector: 'app-burgers-list',
  templateUrl: './burgers-list.component.html',
  styleUrls: ['./burgers-list.component.scss'],
})
export class BurgersListComponent implements OnInit {
  public products?: Products[];
  public orderBurger!: Products[];
  constructor(public productService: ProductService) {}

  ngOnInit() {
    this.productService.getAllProducts().subscribe((res) => {
      let arrayNew: Products[] = [];
      res.filter((data: Products) => {
        if (data.product.type === 'hamburguers') {
          arrayNew.push(data);
        }
      });
      this.products = arrayNew;
      this.orderBurger = this.productService.arrayProducts;

      this.products.forEach((producto) => {
        this.orderBurger.forEach((pedido: Products) => {
          if (pedido.product.name == producto.product.name) {
             producto.qty = pedido.qty;
          }
        });
      });
    });
  }
}
