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

}
