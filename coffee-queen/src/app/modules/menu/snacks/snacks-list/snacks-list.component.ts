import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/data/services/api/product.service';
import { Product, Products } from '../../../../shared/components/card/card-product/card-product.metadata';

@Component({
  selector: 'app-snacks-list',
  templateUrl: './snacks-list.component.html',
  styleUrls: ['./snacks-list.component.scss']
})
export class SnacksListComponent implements OnInit {

  public products!: Products[];
  public snacks!: Products[];
  public orderSnacks!: Products[];

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

  keepQuantityUpdate(products: Products[], orderProduct: Products[]){
    products.map((product: any) => {
      orderProduct.filter((order: any) => {
        if (order.name == product.name) {
           product.qty = order.qty;
        }
      });
    });
  }
}
