import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/data/services/api/product.service';
import { Product } from '../../../../shared/components/card/card-product/card-product.metadata';

@Component({
  selector: 'app-snacks-list',
  templateUrl: './snacks-list.component.html',
  styleUrls: ['./snacks-list.component.scss']
})
export class SnacksListComponent implements OnInit {

  public products!: Product[];
  public snacks!: Product[];
  public orderSnacks!: Product[];

  constructor(public productService: ProductService) {}

  ngOnInit() {
    this.getSnacksProducts();
  }

  getSnacksProducts(){
    this.productService.getAllProducts().subscribe(data => {
      this.snacks = data.filter((item: any) => {
        if (item.type === "snacks") {
          return item;
        }
      })
      this.products = this.snacks;

      this.orderSnacks = this.productService.arrayProducts;
      this.keepQuantityUpdate(this.products, this.orderSnacks)
    });
  }

  keepQuantityUpdate(products: any, orderProduct:any){
    products.forEach((product: any) => {
      orderProduct.products.forEach((order: Product) => {
        if (order.name == product.name) {
          product.qty = order.qty;
        }
      });
    });
  }
}
