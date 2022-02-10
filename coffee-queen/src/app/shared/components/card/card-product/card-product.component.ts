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
      this.productService.setProducts(product);
    }
  }

  disminuirCantidad(productSelected: any) {
    this.cant = productSelected.qty -= 1;
    productSelected.subTotal = this.cant * productSelected.price;
    this.order.total -= productSelected.subTotal;
    this.order.total += productSelected.price * (this.cant - 1);


    // in the card componet qty never be less than zero
    if (this.cant < 0) {
      productSelected.qty = 0;
      const newLocal = 'delete';
      this.productService.setProducts(productSelected, newLocal);
      this.products = this.productService.arrayProducts;
    }

    this.products.map((producto) => {
      if (productSelected.name == producto.name) {
        producto.qty = this.cant;

        // in the order(cart) componet qty never be less than zero
        if (producto.qty == 0 || producto.qty < 0) {
          productSelected.qty = 0;
          const newLocal = 'delete';
          this.productService.setProducts(productSelected, newLocal);
        }

        this.products = this.productService.arrayProducts;
        producto.subTotal = producto.qty * productSelected.price;
      }
    });
  }
}
