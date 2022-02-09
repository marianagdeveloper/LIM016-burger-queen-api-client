import { Component, Input, OnInit } from '@angular/core';
import { ICardProduct } from './card-product.metadata';
import { ProductService } from 'src/app/data/services/api/product.service';
interface Pedido {
  item: string;
  cantidad: number;
  precio: number;
  stock: number;
}
interface Pedido1 {
  name: string;
  price: number;
  image: string;
  type: string;
}

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.scss'],
})
export class CardProductComponent implements OnInit {
  @Input() data!: ICardProduct;

  /*   public pedidos: Pedido1={
    name: '',
    price: 0,
    image: '',
    type: '',
  } */
  public activeDiv: any;
  public desActiveDiv: any;
  public selectProduct?: any = [];
  constructor(public productService: ProductService) {}

  ngOnInit(): void {
    //this.activeDiv=''
  }

  getInfoProduct() {
    // this.productService.disparadorProduct.next(this.selectProduct)
    this.productService.setProducts(this.data);

    this.activeDiv = 'true';
    this.desActiveDiv = 'disableDiv';
  }
}
