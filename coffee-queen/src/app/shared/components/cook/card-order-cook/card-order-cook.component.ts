import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { Order, OrderRecive } from '../../../../modules/orders/order-list/order-list.metadata';
import { OrdersService } from '../../../../data/services/api/orders.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-card-order-cook',
  templateUrl: './card-order-cook.component.html',
  styleUrls: ['./card-order-cook.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CardOrderCookComponent implements OnInit {
  @Input() data!: OrderRecive;
  public dateOrder?: string[];
  public dateDelivering: any;
  public dateDone: any;
  closeResult = '';
  comment = '';
  setcomment = '';
  constructor(public ordersService: OrdersService, private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  changeStatusToDelivering(){
    this.data.status='delivering';
    this.data.dateDelivering = new Date().toString();
    this.ordersService.putOrder(this.data, this.data._id).subscribe();
  }

  changeStatusToDone(){
    this.data.status='preparing';
    this.dateDelivering = new Date(this.data.dateDelivering);
    this.dateDone = new Date();
    this.data.timeResult = this.getDiffDate(this.dateDelivering, this.dateDone)
    this.data.dateDone = this.dateDone.toString();
    this.ordersService.putOrder(this.data, this.data._id).subscribe((res)=>{
      console.log(res);

    });
  }

  cutDate(item: string ){
    return item.split(' ').splice(1, 4).toString().replace(/,+/g, ' ');
  }

  getTimeInSeconds(time: Date){
    let hours = time.getHours();
    hours = hours > 12 ? (hours - 12)*60*60 : hours*60;
    let minutes = time.getMinutes();
    minutes = minutes*60;
    let seconds = time.getSeconds();
    return hours + minutes + seconds;
  }

  secondsToString(seconds:number) {
    let hour: any = Math.floor(seconds / 3600);
    hour = (hour < 10)? '0' + hour : hour;
    let minute: any = Math.floor((seconds / 60) % 60);
    minute = (minute < 10)? '0' + minute : minute;
    let second: any = seconds % 60;
    second = (second < 10)? '0' + second : second;
    return hour + ':' + minute + ':' + second;
  }

  getDiffDate(startTime: Date, endTime: Date){
    let start = this.getTimeInSeconds(startTime);
    let end = this.getTimeInSeconds(endTime);
    let diff = end - start;
    return this.secondsToString(diff);
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
      .open(content, { ariaLabelledBy: 'modal-basic-title', windowClass: 'custom-class', scrollable: true, backdrop: false, keyboard:false})
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
          this.setcomment = this.comment;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  openModal(content: any) {
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title', windowClass: 'custom-modal', scrollable: true})
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
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
