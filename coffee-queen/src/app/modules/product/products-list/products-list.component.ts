import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../data/services/api/product.service';
import { Product, Products } from '../../../shared/components/card/card-product/card-product.metadata';

//@Pipe({filter:'filter'})

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent implements OnInit {
  public products?: Products[];
  public todos!: Products[];
  public getProduct: string = '';
  public array: any;

  constructor(public productService: ProductService) {}

  ngOnInit() {
    this.cleanSearch();
  }

  searchProduct() {
    this.productService.getAllProducts().subscribe((data) => {
      this.products = data;
      this.todos = this.productService.arrayProducts;
      if (this.getProduct === '') {
        this.products = data;
      } else {
        this.products.forEach((producto) => {
          this.todos.forEach((pedido) => {
            if (pedido.product.name == producto.product.name) {
              // producto.qty = pedido.qty;
              producto.product.messageCard = pedido.product.messageCard;
            }
          });
        });

        this.products = this.products?.filter(
          (elem) => elem.product.name.toLowerCase().indexOf(this.getProduct) > -1
        );
      }
    });
  }

  cleanSearch() {
    this.productService.getAllProducts().subscribe((data) => {
      this.products = data;
      this.todos = this.productService.arrayProducts;
      this.products.forEach((producto) => {
        this.todos.forEach((pedido) => {
          if (pedido.product.name == producto.product.name) {
            // producto.qty = pedido.qty;
            producto.product.messageCard = pedido.product.messageCard;
          }
        });
      });
    });
    this.getProduct = '';
  }
}
