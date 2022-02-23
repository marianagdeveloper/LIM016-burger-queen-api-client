import { Component, Input, OnInit, Sanitizer, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import {Subject} from 'rxjs';
import {debounceTime} from 'rxjs/operators';
import {NgbAlert, NgbAlertConfig} from '@ng-bootstrap/ng-bootstrap';
import { ProductService } from 'src/app/data/services/api/product.service';
import { ImageService } from './../../../../data/services/api/image.service';
import { Order } from '../../../../modules/orders/order-list/order-list.metadata';
import { Product } from './card-product.metadata';

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
    dateDelivering: '',
    dateDone: '',
    timeResult:'',
    dateProcessed: '',
    dateCanceled: '',
    additional: ''
  };
  public products!: Product[];
  private _success = new Subject<string>();
  successMessage = '';

  constructor(public productService: ProductService, alertConfig: NgbAlertConfig, private sanitizer: DomSanitizer,private imageService:ImageService) {
    alertConfig.dismissible = false;
  }

  @ViewChild('selfClosingAlert', {static: false}) selfClosingAlert!: NgbAlert;

  ngOnInit(): void {
    this.products = this.productService.arrayProducts;
    //this.data.image = this.imageService.getImages();

    //successful modal setup
    this._success.subscribe(message => this.successMessage = message);
    this._success.pipe(debounceTime(2000)).subscribe(() => {
      if (this.selfClosingAlert) {
        this.selfClosingAlert.close();
      }
    });
  }

  public get safeUrlPic() { return this.sanitizer.bypassSecurityTrustResourceUrl(this.data.image)}

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
    this._success.next(`Producto agregado.`);
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
