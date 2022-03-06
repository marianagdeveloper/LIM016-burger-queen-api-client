import { Component, Input, OnInit } from '@angular/core';
import { Order } from 'src/app/modules/orders/order-list/order-list.metadata';
import { OrdersService } from '../../../../data/services/api/orders.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-card-order',
  templateUrl: './card-order.component.html',
  styleUrls: ['./card-order.component.scss'],
})

export class CardOrderComponent implements OnInit {
  closeResult = '';
  comment = '';
  setcomment = '';
  dateOrder?: string;
  dateOrderCreate = "";
  dateOrderDelivering = "";
  dateOrderDone = "";
  dateOrderProcessed = "";
  dateOrderCanceled = "";
  btnCanceled= false;
  dateCanceledModal= false;

  @Input() data: any;
  public orders!: any[];

  constructor(public ordersService: OrdersService ,private modalService: NgbModal) {}

  ngOnInit(): void {
console.log(this.data);
    this.ordersService.getOrder().subscribe((res: any) => {
      console.log('orders:', res);
      this.orders = res;
      return  this.orders ;
    });
    // // date delivered of modal
    // this.dateOrderProcessed = this.data.dateProcessed.split(' ').splice(1, 4).toString().replace(/,+/g, ' ');
    // // date canceled of modal
    // this.dateOrderCanceled = this.data.dateCanceled.split(' ').splice(1, 4).toString().replace(/,+/g, ' ');
    // // date done of modal
    // this.dateOrderDone = this.data.dateDone.split(' ').splice(1, 4).toString().replace(/,+/g, ' ');
    // // date delivering of modal
    // this.dateOrderDelivering = this.data.dateDelivering.split(' ').splice(1, 4).toString().replace(/,+/g, ' ');
    // // date pending of modal
    // this.dateOrderCreate = this.data.dateEntry.split(' ').splice(1, 4).toString().replace(/,+/g, ' ');
    // // footer card
    // // this.dateOrder = this.data.dateEntry.split(' ').splice(4, 4).toString().replace(/,+/g, ' ').split('GMT').splice(0, 1);
    this.dateOrder = this.data.dateEntry;
    // btn canceled
    this.btnCanceled =  this.data.status != 'delivered' && this.data.status != 'canceled' ? true : false
    // date canceled in modal
    this.dateCanceledModal =  this.data.status == 'canceled' ? true : false
  }

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

  updateStatus(){
    this.data.status = 'delivered'
    this.data.dateProcessed = new Date().toString();
    this.ordersService.putOrder(this.data, this.data._id).subscribe();
  }

  canceledOrder(){
    this.data.status = 'canceled'
    this.data.dateCanceled = new Date().toString();
    this.ordersService.putOrder(this.data, this.data._id).subscribe();
  }

}
