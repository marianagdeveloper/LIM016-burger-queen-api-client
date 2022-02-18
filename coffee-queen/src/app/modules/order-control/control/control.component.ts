import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from 'src/app/data/services/api/product.service';
import { Order } from '../../orders/order-list/order-list.metadata';
import { OrdersService } from '../../../data/services/api/orders.service';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.scss'],
})
export class ControlComponent implements OnInit {

  public activebutton?:string;
  public orders: Order[] = [];
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
        qty: 0,
        subTotal: 0,
        dateEntry: '',
      },
    ],
    total: 0,
    totalQty: 0,
    numberTable: '',
    status: '',
    dateEntry: Date,
    dateDelivering: '',
    dateDone: '',
    timeResult: '',
    dateProcessed: '',
    additional: '',
  };

  constructor(public productService: ProductService, public ordersService: OrdersService) {}

  ngOnInit(): void {

    /* this.ordersService.dispatchStatusOrder.subscribe(res => {
      console.log('recibiendo data', res);

    }) */

    this.ordersService.getOrder().subscribe((res: any) => {
      this.orders = res;
      return res;
    });
  }

  navigateToSection(section: string) {
    window.location.hash = '';
    window.location.hash = section;
    this.activebutton = 'activebutton';
  }


}
