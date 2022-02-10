import { Component, Input, OnInit } from '@angular/core';
import { ICardProduct } from './card-product.metadata';
import { ProductService } from 'src/app/data/services/api/product.service';

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

  public cant: number = 0;
  public isRepeat: boolean = false;
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

  constructor(public productService: ProductService) {}

  ngOnInit(): void {
    this.products = this.productService.arrayProducts;
  }

  updateRepeats(productSelected?: any) {
   this.products.map((producto) => {
      if (productSelected.name == producto.name) {
        producto.qty = this.data.qty;
        this.isRepeat = true;
      }
    });
  }

  aumentarCantidad(product: any) {
    this.cant = product.qty += 1;
    product.subTotal = this.cant * product.price;
    this.order.total += product.subTotal;
    this.order.total -= product.price * (this.cant - 1);
    this.updateRepeats(product);
    // add new product
    if (!(this.isRepeat || product.qty > 1)) {
      this.productService.setProducts(product)
    }
  }

  disminuirCantidad(product: any) {
    console.log('en disminuir');

    if (product.qty < 2) {
      product.qty = 0;
      product.subTotal = product.price;
    } else {
      this.cant = product.qty -= 1;
      product.subTotal = this.cant * product.price;
      this.order.total -= product.subTotal;
      this.order.total += product.price * (this.cant - 1);

      this.products.map((producto) => {
        if (product.name == producto.name) {
          producto.qty = this.cant;
          producto.subTotal = product.subTotal;
        }
      });
    }
    // return this.order.total;
  }
}
