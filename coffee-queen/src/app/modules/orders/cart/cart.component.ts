import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/data/services/api/product.service';
import { ICardProduct } from 'src/app/shared/components/card/card-product/card-product.metadata';

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
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  public products!: ICardProduct[];
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
  public subTotal: number = 0;
  public total: number = 0;
  public deleteSubtotal: number = 0;
  public newVariable: number = 0;
  public cant: number = 0;
  public nameProduct: string = '';

  constructor(public productService: ProductService) {}
  ngOnInit(): void {
    this.products = this.productService.arrayProducts;

    this.products.map((ele: any) => {
      this.order.total += ele.subTotal;
    });
  }
  aumentarCantidad(product: any) {
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
      this.order.total = this.disminuirCantidad(product) - this.deleteSubtotal;
    } else {
      this.order.total = this.disminuirCantidad(product) - product.price;
    }
  }
}
