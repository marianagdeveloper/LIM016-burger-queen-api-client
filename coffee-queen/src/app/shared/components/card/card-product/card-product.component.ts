import { Component, Input, OnInit } from '@angular/core';
import { Product } from './card-product.metadata';
import { ProductService } from 'src/app/data/services/api/product.service';
import { Order } from '../../../../modules/orders/order-list/order-list.metadata';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.scss'],
})
export class CardProductComponent implements OnInit {
  @Input() data!: Product;

  public quantity: number = 0;
  public isRepeat: boolean = false;
  public order: Order = {
    id: 0,
    userName: '',
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
    totalQty: 0,
    numberTable: '',
    status: '',
    dateEntry: '',
    dateProcessed: '',
    additional: ''
  };
  public products!: Product[];

  constructor(public productService: ProductService) { }

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

  increaseQuantity(product: any) {
    this.quantity = product.qty += 1;
    product.subTotal = this.quantity * product.price;
    this.order.total += product.subTotal;
    this.order.total -= product.price * (this.quantity - 1);

    this.updateRepeats(product);
    // add new product
    if (!(this.isRepeat || product.qty > 1)) {
      this.productService.setProducts(product);
    }
  }

  decreaseQuantity(productSelected: any) {
    this.quantity = productSelected.qty -= 1;
    productSelected.subTotal = this.quantity * productSelected.price;
    this.order.total -= productSelected.subTotal;
    this.order.total += productSelected.price * (this.quantity - 1);

    // in the card componet qty never be less than zero
    if (this.quantity < 0) {
      productSelected.qty = 0;
      const newLocal = 'delete';
      this.productService.setProducts(productSelected, newLocal);
      this.products = this.productService.arrayProducts;
    }

    this.products.map((producto) => {
      if (productSelected.name == producto.name) {
        producto.qty = this.quantity;

        // in the order(cart) componet qty never be less than zero
        if (producto.qty <= 0) {
          productSelected.qty = 0;
          const newLocal = 'delete';
          this.productService.setProducts(productSelected, newLocal);
        }

        this.products = this.productService.arrayProducts;
        producto.subTotal = producto.qty * productSelected.price;
      }
    });

    if (productSelected.qty <= 0) {
      productSelected.qty = 0;
      const newLocal = 'delete';
      this.productService.setProducts(productSelected, newLocal);
      this.products = this.productService.arrayProducts;
    }
  }
}
