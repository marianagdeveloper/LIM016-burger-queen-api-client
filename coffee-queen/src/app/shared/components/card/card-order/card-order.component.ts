import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from 'src/app/data/services/api/product.service';
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
  dateOrder = "";
  dateOrderCreate = "";
  dateOrderDelivering = "";
  dateOrderDone = "";
  dateOrderProcessed = "";

  @Input() data!: Order;


  public orders!: Order[];

  constructor(public ordersService: OrdersService ,private modalService: NgbModal) {}

  ngOnInit(): void {


    this.ordersService.getOrder().subscribe((res: any) => {
      this.orders = res;
      console.log('this.orders en get', this.orders);
      return res;
    });
    // date delivered of modal
    this.dateOrderProcessed = this.data.dateProcessed.split(' ').splice(1, 4).toString().replace(/,+/g, ' ');
    // date done of modal
    this.dateOrderDone = this.data.dateDone.split(' ').splice(1, 4).toString().replace(/,+/g, ' ');
    // date delivering of modal
    this.dateOrderDelivering = this.data.dateDelivering.split(' ').splice(1, 4).toString().replace(/,+/g, ' ');
    // date pending of modal
    this.dateOrderCreate = this.data.dateEntry.split(' ').splice(1, 4).toString().replace(/,+/g, ' ');
    // footer card
    this.dateOrder = this.data.dateEntry.split(' ').splice(4, 4).toString().replace(/,+/g, ' ').split('GMT').splice(0, 1);
  }

  open(content: any) {
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
          console.log('this.closeResult', this.closeResult);
          console.log('result', result);

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
    this.ordersService.putOrder(this.data, this.data.id);
    // this.ordersService.dispatchStatusOrder.emit({
    //   data:this.data
    // })
  }

}
