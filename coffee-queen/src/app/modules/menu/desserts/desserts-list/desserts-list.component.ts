import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../../data/services/api/product.service';
import { Product } from '../../../../shared/components/card/card-product/card-product.metadata';

@Component({
  selector: 'app-desserts-list',
  templateUrl: './desserts-list.component.html',
  styleUrls: ['./desserts-list.component.scss']
})
export class DessertsListComponent implements OnInit {

  public products!: Product[];
  public desserts!: Product[];
  public orderDesserts!: Product[];
  constructor(public productService: ProductService) {}

  ngOnInit() {
    this.productService.getAllProducts().subscribe(data => {
      this.products = data;

      function filtrarPorType(obj: Product): any {
        if (obj.type === "desserts") {
          return obj;
        }
      }
      this.desserts = data.filter(filtrarPorType);
      this.orderDesserts = this.productService.arrayProducts;

      this.desserts.forEach((producto) => {
        this.orderDesserts.forEach((pedido: Product) => {
          if (pedido.name == producto.name) {
            producto.qty = pedido.qty;
          }
        });
      });
    });
  }

}
