import { Component, OnInit, Input } from '@angular/core';
import { Order } from '../../../../modules/orders/order-list/order-list.metadata';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Input() data!: Order;

  constructor() { }

  ngOnInit(): void {
  }
  cutNameProduct(item: string ){
    return item.split(' ').splice(1, 4).toString().replace(/,+/g, ' ');
  }
}
