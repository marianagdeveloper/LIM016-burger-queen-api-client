import { Component, Input, OnInit, Sanitizer, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ProductService } from 'src/app/data/services/api/product.service';
import { Order } from '../../../../modules/orders/order-list/order-list.metadata';
import { Product, Products } from './card-product.metadata';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.scss'],
})
export class CardProductComponent implements OnInit {
  @Input() data!: any;


  public quantity: number = 0;
  public isRepeat: boolean = false;
  public order: Order = {
    _id: '',
    userId: '',
    client: '',
    products: [
      {
        qty: 0,
        subTotal: 0,
        product: {
          _id: '',
          name: '',
          price: 0,
          image: '',
          type: '',
          dateEntry: ''
        }
      },
    ],
    total: 0,
    totalQty: 0,
    numberTable: '',
    status: '',
    dateEntry: '',
    dateDelivering: '',
    dateDone: '',
    timeResult:'',
    dateProcessed: '',
    dateCanceled: '',
    additional: '',

  };
  public products!: Products[];
  messageProduct = '';

  constructor(public productService: ProductService, private sanitizer: DomSanitizer) {
  }

  ngOnInit(): void {
    this.products = this.productService.arrayProducts;
    // this.data.product.image = this.imageService.getImages();
    console.log('this.data', this.data.image);

  }

  public get safeUrlPic() { return this.sanitizer.bypassSecurityTrustResourceUrl(this.data.image)}

  updateRepeats(productSelected?: any) {

    this.products.map((producto) => {
      if (productSelected.name == producto.product.name) {
        producto.qty = this.data.qty;
        producto.subTotal = this.data.subTotal;
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
      if (productSelected.name == producto.product.name) {
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
