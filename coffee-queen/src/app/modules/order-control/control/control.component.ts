import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from 'src/app/data/services/api/product.service';
import { Order } from '../../orders/order-list/order-list.metadata';
import { OrdersService } from '../../../data/services/api/orders.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.scss'],
})
export class ControlComponent implements OnInit {

  public activebutton?:string;
  public orders: Order[] = [];
  public order: Order = {
    _id: '',
    userId: '',
    client: '',
    products: [
      {
        _id: '',
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
    numberTable: '',
    status: '',
    dateEntry: '',
    dateDelivering: '',
    dateDone: '',
    timeResult: '',
    dateProcessed: '',
    dateCanceled: '',
    additional: '',
  };

  constructor(public productService: ProductService, public ordersService: OrdersService, private router: Router) {}

  ngOnInit(): void {
    this.ordersService.getOrder().subscribe((res: any) => {
      this.orders = res;
      return res;
    });
    this.router.navigate(['order-control/pending']);
  }

  navigateToSection(section: string) {
    window.location.hash = '';
    window.location.hash = section;
    this.activebutton = 'activebutton';
  }


}
