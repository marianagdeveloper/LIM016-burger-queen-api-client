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

  constructor(public ordersService: OrdersService, private modalService: NgbModal) {}

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

  open(content:any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
      this.setcomment = this.comment;

    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
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


  // showDetails(order:any){
  //   this.detailOrder = order;
  //   console.log('showDetails:', this.detailOrder);
  // }

  // clean(){
  //   this.detailOrder = {
  //     id: 0,
  //     userName: '',
  //     client: '',
  //     products: [
  //       {
  //         id: 0,
  //         name: '',
  //         price: 0,
  //         image: '',
  //         type: '',
  //         dateEntry: '',
  //         qty: 0,
  //         subTotal: 0,
  //       },
  //     ],
  //     total: 0,
  //     totalQty: 0,
  //     numberTable: '',
  //     status: '',
  //     dateEntry: '',
  //     dateProcessed: '',
  //     additional: ''
  //   };
  //   console.log('showDetails:', this.detailOrder);
  // }
}
