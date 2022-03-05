import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/data/services/api/product.service';
import { Product, Products } from 'src/app/shared/components/card/card-product/card-product.metadata';

@Component({
  selector: 'app-cafes-list',
  templateUrl: './cafes-list.component.html',
  styleUrls: ['./cafes-list.component.scss'],
})
export class CafesListComponent implements OnInit {

  public products!: Product[];
  public orderCafe!: Product[];

  constructor(public productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe((data) => {
      const cafes = data.filter((e: any) => {
        if (e.type == 'cafes') {
          return e;
        }
      });
      this.products = cafes;
      this.orderCafe = this.productService.arrayProducts;

      this.products.forEach((producto) => {
        this.orderCafe.forEach((pedido: Product) => {
          if (pedido.name == producto.name) {
            producto.qty = pedido.qty;
          }
        });
      });
    });
  }
}
