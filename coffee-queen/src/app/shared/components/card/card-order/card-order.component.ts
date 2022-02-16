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

  @Input() data!: Order;


  public orders!: Order[];

  constructor(public ordersService: OrdersService, private modalService: NgbModal) {}

  ngOnInit(): void {
    this.dateOrder = this.data.dateEntry.split(' ').splice(4, 4).toString().replace(/,+/g, ' ').split('GMT').splice(0, 1);
    this.ordersService.getOrder().subscribe((res: any) => {
      // res.forEach((element:any) => {
      //   element.dateEntry = element.dateEntry.split(' ').splice(0, 4).toString().replace(/,+/g, ' ');
      // });
      this.orders = res;
      console.log('this.orders', this.orders);
      return res;
    });

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

}
