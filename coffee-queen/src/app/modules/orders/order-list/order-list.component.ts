import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ProductService } from 'src/app/data/services/api/product.service';
import { Product, Products } from 'src/app/shared/components/card/card-product/card-product.metadata';
import { Order } from './order-list.metadata';
import { Router } from '@angular/router';
import { OrdersService } from '../../../data/services/api/orders.service';
import { UsersService } from './../../../data/services/api/users.service';

import {Subject} from 'rxjs';
import {debounceTime} from 'rxjs/operators';
import { NgbAlert, NgbAlertConfig } from '@ng-bootstrap/ng-bootstrap';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss'],
})
export class OrderListComponent implements OnInit {

  //alert
  private _successOrder = new Subject<string>();
  successMessageOrder = '';
  @ViewChild('staticAlert', {static: false}) staticAlert!: NgbAlert;
  @ViewChild('selfClosingAlert', {static: false}) selfClosingAlert!: NgbAlert;

  public products!: Product[];
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
  public deleteSubtotal: number = 0;
  public quantity: number = 0;
  public arrayNumberTable: number[] = [];
  public optionSelected: string = '0';
  private _success2 = new Subject<string>();
  successMessage2 = '';


  closeResult = '';
  comment = '';
  setcomment = '';
  @Input() data!: Order;

  constructor(
    public productService: ProductService,public usersService: UsersService,
    private router: Router,
    public ordersService: OrdersService,
    public usersServices: UsersService,
    alertConfig: NgbAlertConfig,
    private modalService: NgbModal
    ) {
    this.arrayNumberTable=[1,2,3,4,5];
    alertConfig.dismissible = false;
  }

  @ViewChild('selfClosingAlert2', {static: false}) selfClosingAlert2!: NgbAlert;

  ngOnInit(): void {
    // this.order.userId=this.usersService.disparador.getValue().name;
    this.products = this.productService.arrayProducts;

      this.products.map((ele: any) => {
      this.order.total += ele.subTotal;
      this.order.totalQty += ele.qty;
    });
    this.order.products= this.products;

    //successful modal setup
    this._success2.subscribe(message => this.successMessage2 = message);
    this._success2.pipe(debounceTime(3000)).subscribe(() => {
      if (this.selfClosingAlert2) {
        this.selfClosingAlert2.close();
      }
    })

    //alert
    this._successOrder.subscribe(message => this.successMessageOrder = message);
    this._successOrder.pipe(debounceTime(5000)).subscribe(() => {
      if (this.selfClosingAlert) {
        this.selfClosingAlert.close();
        this.router.navigate(['product']);
      }
    });
  }


  captureNumberTable(){
    this.order.numberTable=this.optionSelected;
  }

  sendOrder(){
    this.order.products = this.productService.arrayProducts;
    this.order.status = 'pending'
    this.order.dateEntry = new Date().toString();
    this.order.userId= this.usersServices.disparador.getValue( )._id;
    if(this.order.client == '' || this.order.numberTable == '' || this.order.total == 0){
      this._success2.next(`Hay campos vacíos. Verifique antes de enviar por favor.`);
    } else{
      console.log('this.order', this.order);

      this.ordersService.postOrder(this.order).subscribe();
      this.order.products.forEach(product => {
      this.productService.setProducts(product, 'delete');
      })
      this.changeSuccessMessageOrder();
    }
  }

  increaseQuantity(product: any) {
    this.quantity = product.qty += 1;
    product.subTotal = this.quantity * product.price;
    this.order.total += product.subTotal;
    this.order.total -= product.price * (this.quantity - 1);
    this.order.totalQty += 1
  }

  decreaseQuantity(product: any) {
    if (product.qty < 2) {
      product.qty = 1;
      product.subTotal = product.price;
    } else {
      this.quantity = product.qty -= 1;
      product.subTotal = this.quantity * product.price;
      this.order.total -= product.subTotal;
      this.order.total += product.price * (this.quantity - 1);
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
      this.order.total = this.decreaseQuantity(product) - product.subTotal;
    } else {
      this.order.total = this.decreaseQuantity(product) - product.price;
    }
    this.order.totalQty -= product.qty;
  }

  //alert
  public changeSuccessMessageOrder() { this._successOrder.next(`Pedido registrado y enviado exitosamente!!`); }

  //modal
  open(content: any) {
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title', scrollable: true })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
          if (result == 'cancel') {
            this.canceledOrder();
          }
          this.setcomment = this.comment;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  canceledOrder(){
    this.products.map((item: any) => {
        const newLocal = 'delete';
        this.productService.setProducts(item, newLocal);
    });
    this.products = this.productService.arrayProducts;

    this.order.total = 0;
    this.order.totalQty = 0;
    this.optionSelected= '0';
    this.order.client = '';
    this.order.additional= '';
  }
}


