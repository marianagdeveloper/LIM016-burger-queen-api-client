import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/data/services/api/product.service';
import { Order } from '../../orders/order-list/order-list.metadata';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.scss'],
})
export class ControlComponent implements OnInit {
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
    dateProcessed: '',
    additional: '',
  };

  public claseNew?: string;
  constructor(public productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getOrder().subscribe((res: any) => {
      this.orders = res;
      return res;
    });
  }

  navigateToSection(section: string) {
    window.location.hash = '';
    window.location.hash = section;
    this.claseNew = 'classNew';
  }
}
