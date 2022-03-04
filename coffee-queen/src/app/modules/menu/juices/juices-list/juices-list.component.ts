import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/data/services/api/product.service';
import { Product, Products } from 'src/app/shared/components/card/card-product/card-product.metadata';

@Component({
  selector: 'app-juices-list',
  templateUrl: './juices-list.component.html',
  styleUrls: ['./juices-list.component.scss']
})
export class JuicesListComponent implements OnInit {

  public products?: Products[];
  public orderJuices!: Products[];
  constructor(public productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe((data) => {
      const juices = data.filter((e: any) => {
        if (e.type == 'juices') {
          return e;
        }
      });
      this.products = juices;
      this.orderJuices = this.productService.arrayProducts;

      this.products.forEach((producto) => {
        this.orderJuices.forEach((pedido: Products) => {
          if (pedido.product.name == producto.product.name) {
            producto.qty = pedido.qty;
          }
        });
      });
    });
  }

}
