import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from 'src/app/data/services/api/product.service';
import { Order } from 'src/app/modules/orders/order-list/order-list.metadata';
import { OrdersService } from '../../../../data/services/api/orders.service';

@Component({
  selector: 'app-card-order',
  templateUrl: './card-order.component.html',
  styleUrls: ['./card-order.component.scss'],
})
export class CardOrderComponent implements OnInit {
  @Input() data!: Order;
  public detailOrder: Order= {
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
    }

  public orders!: Order[];

  constructor(public ordersService: OrdersService) {}

  ngOnInit(): void {
    this.ordersService.getOrder().subscribe((res: any) => {
      // res.forEach((element:any) => {
      //   element.dateEntry = element.dateEntry.split(' ').splice(0, 4).toString().replace(/,+/g, ' ');
      // });
      this.orders = res;
      console.log('this.orders', this.orders);



      return res;
    });
  }

  showDetails(order:any){
    this.detailOrder = order;
    console.log('showDetails:', this.detailOrder);
  }

  clean(){
    this.detailOrder = {
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
    console.log('showDetails:', this.detailOrder);
  }
}
