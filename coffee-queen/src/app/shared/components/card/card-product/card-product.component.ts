import { Component, Input, OnInit } from '@angular/core';
import { ICardProduct } from './card-product.metadata';
import { ProductService } from 'src/app/data/services/api/product.service';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.scss']
})
export class CardProductComponent implements OnInit {
  @Input() data!: ICardProduct;

  public pedidos: ICardProduct[] = [];
  public selectProduct: any;
  constructor(public productService: ProductService ) { }

  ngOnInit(): void {
  }

  getInfoProduct(){
    this.selectProduct = this.data;
    console.log(this.selectProduct);
    this.productService.disparadorProduct.next(this.selectProduct);
  }
}
