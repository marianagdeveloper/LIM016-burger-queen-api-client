import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../../data/services/api/product.service';
import { ICardProduct } from '../../../../shared/components/card/card-product/card-product.metadata';

@Component({
  selector: 'app-desserts-list',
  templateUrl: './desserts-list.component.html',
  styleUrls: ['./desserts-list.component.scss']
})
export class DessertsListComponent implements OnInit {

  public products!: ICardProduct[];

  public desserts!: ICardProduct[];
  public pedidoDesserts!: ICardProduct[];
  constructor(public productService: ProductService) {}

  ngOnInit() {
    this.productService.getAllProducts().subscribe(data => {
      this.products = data;

      function filtrarPorType(obj: ICardProduct): any {
        if (obj.type === "desserts") {
          return obj;
        }
      }
      this.desserts = data.filter(filtrarPorType);
      this.pedidoDesserts = this.productService.arrayProducts;

      this.desserts.forEach((producto) => {
        this.pedidoDesserts.forEach((pedido: any) => {
          if (pedido.name == producto.name) {
            producto.qty = pedido.qty;
          }
        });
      });
    });
  }

}
