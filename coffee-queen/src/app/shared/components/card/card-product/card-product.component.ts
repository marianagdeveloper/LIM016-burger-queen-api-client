import { Component, Input, OnInit } from '@angular/core';
import { ICardProduct } from './card-product.metadata';
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

  constructor() { }

  ngOnInit(): void {
  }
  getInfoProduct(){
    const selectProduct = this.data;
    console.log(selectProduct);
  }
}
