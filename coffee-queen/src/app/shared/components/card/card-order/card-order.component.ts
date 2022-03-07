import { Component, Input, OnInit } from '@angular/core';
import { Order } from 'src/app/modules/orders/order-list/order-list.metadata';
import { OrdersService } from '../../../../data/services/api/orders.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { OrderRecive } from '../../../../modules/orders/order-list/order-list.metadata';

@Component({
  selector: 'app-card-order',
  templateUrl: './card-order.component.html',
  styleUrls: ['./card-order.component.scss'],
})

export class CardOrderComponent implements OnInit {
  closeResult = '';
  comment = '';
  setcomment = '';
  dateOrder?: string[];
  dateOrderCreate = "";
  dateOrderDelivering = "";
  dateOrderDone = "";
  dateOrderProcessed = "";
  dateOrderCanceled = "";
  btnCanceled= false;
  dateCanceledModal= false;

  @Input() data!: OrderRecive;
  public orders: any[] = [{
    _id: '',
    userId: '',
    client: '',
    products: [
      {
        qty: 0,
        subTotal: 0,
        productId: {
          _id: '',
          name: '',
          price: 0,
          image: '',
          type: '',
          dateEntry: ''
        },
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
  }];

  constructor(public ordersService: OrdersService ,private modalService: NgbModal) {}

  ngOnInit(): void {
    this.ordersService.getOrder().subscribe((res: any) => {
      this.orders = res;
      return  this.orders ;
    });
    // // date delivered of modal
    //this.dateOrderProcessed = this.data.dateProcessed.split(' ').splice(1, 4).toString().replace(/,+/g, ' ');
    // // date canceled of modal
    //this.dateOrderCanceled = this.data.dateCanceled.split(' ').splice(1, 4).toString().replace(/,+/g, ' ');
    // // date done of modal
    //this.dateOrderDone = this.data.dateDone.split(' ').splice(1, 4).toString().replace(/,+/g, ' ');
    // // date delivering of modal
    //this.dateOrderDelivering = this.data.dateDelivering.split(' ').splice(1, 4).toString().replace(/,+/g, ' ');
    // // date pending of modal
    //this.dateOrderCreate = this.data.dateEntry.split(' ').splice(1, 4).toString().replace(/,+/g, ' ');
    // // footer card
    //this.dateOrder = this.data.dateEntry.split(' ').splice(4, 4).toString().replace(/,+/g, ' ').split('GMT').splice(0, 1).toString().split(':').splice(0,2);

    //console.log(this.dateOrder);

    // btn canceled
    this.btnCanceled =  this.data.status != 'delivered' && this.data.status != 'canceled' ? true : false
    // date canceled in modal
    this.dateCanceledModal =  this.data.status == 'canceled' ? true : false
  }

  timeToShowOnCard(dateOrder: any){
    let date = dateOrder.split(' ').splice(4, 4).toString().replace(/,+/g, ' ').split('GMT').splice(0, 1).toString().split(':').splice(0,2);
    let hour = date[0];
    let minute = date[1];
    let timeDate = hour.concat(':', minute);
    date = Array(timeDate);
    let firstNumber = parseInt(date[0].split(':')[0]);
    if (firstNumber<12){
      date[0] = date + ' am';
    } else {
      date[0] = date + ' pm';
    }
    return date;
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
