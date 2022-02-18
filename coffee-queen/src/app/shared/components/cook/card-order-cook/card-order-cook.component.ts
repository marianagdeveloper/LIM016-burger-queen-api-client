import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { Order } from '../../../../modules/orders/order-list/order-list.metadata';
import { OrdersService } from '../../../../data/services/api/orders.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-card-order-cook',
  templateUrl: './card-order-cook.component.html',
  styleUrls: ['./card-order-cook.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CardOrderCookComponent implements OnInit {
  @Input() data!: Order;
  public dateOrder: string = '';
  closeResult = '';
  comment = '';
  setcomment = '';
  constructor(public ordersService: OrdersService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.dateOrder = this.data.dateEntry.split(' ').splice(1, 4).toString().replace(/,+/g, ' ');
  }
  /* cutNameProducto(item: string ){
    return item.split(' ').splice(0, 3).toString().replace(/,+/g, ' ')
  } */
  changeStatus(){
    this.data.status='delivering';
    this.ordersService.putOrder(this.data, this.data.id);
    this.ordersService.dispatchStatusOrder.emit({
      data:this.data
    })
  }

  changeStatusDone(){
    this.data.status='done';
    this.ordersService.putOrder(this.data, this.data.id);
  }

  cutNameProduct(item: string ){
    return item.split(' ').splice(1, 4).toString().replace(/,+/g, ' ');
  }

  open(content: any) {
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title', windowClass: 'custom-class', scrollable: true, backdrop: false, keyboard:false})
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
