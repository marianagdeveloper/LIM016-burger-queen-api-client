import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/data/services/api/product.service';
import { ICardProduct } from 'src/app/shared/components/card/card-product/card-product.metadata';

@Component({
  selector: 'app-cafes-list',
  templateUrl: './cafes-list.component.html',
  styleUrls: ['./cafes-list.component.scss'],
})
export class CafesListComponent implements OnInit {
  public products!: ICardProduct[];
  public pedidoCafe: any;
  public prueba: any;
  constructor(public productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe((data) => {
      const cafes = data.filter((e: any) => {
        if (e.type == 'cafes') {
          return e;
        }
      });
      this.products = cafes;
      this.pedidoCafe = this.productService.arrayProducts;

      this.products.forEach((producto) => {
        this.pedidoCafe.forEach((pedido: any) => {
          if (pedido.name == producto.name) {
            producto.qty = pedido.qty;
          }
        });
      });
    });
  }
}
