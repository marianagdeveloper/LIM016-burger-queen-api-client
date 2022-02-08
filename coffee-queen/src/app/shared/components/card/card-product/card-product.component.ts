import { Component, Input, OnInit } from '@angular/core';
import { ICardProduct } from './card-product.metadata';
import { ProductService } from 'src/app/data/services/api/product.service';
interface Pedido {
  item: string,
  cantidad: number,
  precio: number,
  stock: number,
}

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.scss']
})
export class CardProductComponent implements OnInit {
  @Input() data?: ICardProduct;

  pedidos: Pedido[] = [];
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
