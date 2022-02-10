import { Component, OnInit } from '@angular/core';
import { ProductService } from './../../../../data/services/api/product.service';
import { ICardProduct } from './../../../../shared/components/card/card-product/card-product.metadata';

@Component({
  selector: 'app-burgers-list',
  templateUrl: './burgers-list.component.html',
  styleUrls: ['./burgers-list.component.scss'],
})
export class BurgersListComponent implements OnInit {
  public products?: ICardProduct[];
  public pedidoBurger!: ICardProduct[];
  constructor(public productService: ProductService) {}

  ngOnInit() {
    this.productService.getAllProducts().subscribe((res) => {
      let arrayNew: any[] = [];
      res.filter((data: any) => {
        if (data.type === 'hamburguers') {
          arrayNew.push(data);
        }
      });
      this.products = arrayNew;
      this.pedidoBurger = this.productService.arrayProducts;

      this.products.forEach((producto) => {
        this.pedidoBurger.forEach((pedido: any) => {
          if (pedido.name == producto.name) {
            producto.qty = pedido.qty;
          }
        });
      });
    });
  }
}
