import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/data/services/api/product.service';
import { ICardProduct } from 'src/app/shared/components/card/card-product/card-product.metadata';
import { LoginService } from 'src/app/data/services/api/login.service';

interface Order {
  _id: number;
  userName: string,
  client: string;
  products: ICardProduct[];
  total: number;
  totalQty: number,
  numberTable:string,
  status: string;
  dateEntry: string;
  dateProcessed: string;
}
@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss'],
})
export class OrderListComponent implements OnInit {
  public products!: ICardProduct[];
  public order: Order = {
    _id: 0,
    userName: '',
    client: '',
    products: [
      {
        id: 0,
        name: '',
        price: 0,
        image: '',
        type: '',
        qty: 0,
        subTotal: 0,
        dateEntry: '',
      },
    ],
    total: 0,
    totalQty: 0,
    numberTable:'',
    status: '',
    dateEntry: '',
    dateProcessed: '',
    //Añadir qties no te olvides!
  };
  public subTotal: number = 0;
  public total: number = 0;
  public totalQty: number = 0;
  public deleteSubtotal: number = 0;
  public newVariable: number = 0;
  public cant: number = 0;
  public nameProduct: string = '';
  public dateNow:any;
  public arrayNumberTable: number[] = [];
  public opcionSeleccionado: string = '0';
  constructor(public productService: ProductService,public loginService: LoginService) {
    this.arrayNumberTable=[1,2,3,4,5];
  }
  ngOnInit(): void {
    this.order.userName=this.loginService.disparador.getValue( ).name;
    this.products = this.productService.arrayProducts;
    this.products.map((ele: any) => {
      this.order.total += ele.subTotal;
      this.order.totalQty += ele.qty;
    });
    this.order.products= this.products;
  }
  capturar(){
    this.order.numberTable=this.opcionSeleccionado;
  }
sendOrder(){
console.log(this.order);
const tiempoTranscurrido = Date.now();
const hoy = new Date(tiempoTranscurrido);
this.order.dateEntry=hoy.toUTCString();
}



  aumentarCantidad(product: any) {
    this.cant = product.qty += 1;
    product.subTotal = this.cant * product.price;
    this.order.total += product.subTotal;
    this.order.total -= product.price * (this.cant - 1);
    // this.order.totalQty = 0;
    // this.products.map((ele: any) => {
    //   this.order.totalQty += ele.qty;
    // });
    this.order.totalQty += 1
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
      this.order.totalQty -= 1
    }
    return this.order.total;
  }
  deleteProduct(product: any) {
    this.products.filter((item: any) => {
      if (item.name == product.name) {
        const newLocal = 'delete';
        this.productService.setProducts(item, newLocal);
      } else {
        this.deleteSubtotal = product.subTotal - product.price;
      }
    });
    this.products = this.productService.arrayProducts;
    if (product.qty > 1) {
      this.order.total = this.disminuirCantidad(product) - product.subTotal;
    } else {
      this.order.total = this.disminuirCantidad(product) - product.price;
    }
    this.order.totalQty -= product.qty;
  }
}
