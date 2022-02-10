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
interface orderProducts {
  id: number;
  name: string;
  price: number;
  image: string;
  type: string;
  dateEntry: string;
  qty: number;
  subTotal: number;
}
interface Order {
  _id: number;
  userId: number;
  client: string;
  products: orderProducts[];
  total: number;
  status: string;
  dateEntry: string;
  dateProcessed: string;
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
  /* public cant: number = 0;
  public order: Order = {
    _id: 0,
    userId: 0,
    client: '',
    products: [
      {
        id: 0,
        name: '',
        price: 0,
        image: '',
        type: '',
        dateEntry: '',
        qty: 0,
        subTotal: 0,
      },
    ],
    total: 0,
    status: '',
    dateEntry: '',
    dateProcessed: '',
    //Añadir qties no te olvides!
  };
  public products!: ICardProduct[];
  public updateProducts: any; */


  constructor(public productService: ProductService) {}

  ngOnInit(): void {
    //this.activeDiv='
    //this.products = this.productService.arrayProducts;
  }

  getInfoProduct() {
    /* this.products.map( producto => {
        if( this.data.name == producto.name){
          producto.qty = this.data.qty;
          //this.productService.setProducts(this.data, 'update');
        }
    }) */

    this.productService.setProducts(this.data);


    this.activeDiv = 'true';
    this.desActiveDiv = 'disableDiv';
  }

  /* aumentarCantidad(product: any) {
    this.cant = product.qty += 1;
    product.subTotal = this.cant * product.price;
    this.order.total += product.subTotal;
    this.order.total -= product.price * (this.cant - 1);
  }
  disminuirCantidad(product: any) {
    if (product.qty < 2) {
      product.qty = 1;
      product.subTotal = product.price;
    } else {
      this.cant = product.qty -= 1;
      product.subTotal = this.cant * product.price;
      this.order.total -= product.subTotal;
      this.order.total += product.price * (this.cant - 1);
    }
    return this.order.total;
  } */
}
