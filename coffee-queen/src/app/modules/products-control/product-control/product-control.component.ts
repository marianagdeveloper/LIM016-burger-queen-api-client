import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/components/card/card-product/card-product.metadata';
import { ProductService } from './../../../data/services/api/product.service';

@Component({
  selector: 'app-product-control',
  templateUrl: './product-control.component.html',
  styleUrls: ['./product-control.component.scss']
})
export class ProductControlComponent implements OnInit {
  public products?: Product[];
  constructor(public productsService: ProductService) { }

  ngOnInit(): void {
    this.productsService.getAllProducts().subscribe((data:any) => {
      this.products = data;
    });
  }

}
