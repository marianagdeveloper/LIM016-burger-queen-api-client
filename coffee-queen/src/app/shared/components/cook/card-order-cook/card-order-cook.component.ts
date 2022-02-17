import { Component, OnInit, Input } from '@angular/core';
import { Order } from '../../../../modules/orders/order-list/order-list.metadata';
import { OrdersService } from '../../../../data/services/api/orders.service';

@Component({
  selector: 'app-card-order-cook',
  templateUrl: './card-order-cook.component.html',
  styleUrls: ['./card-order-cook.component.scss']
})
export class CardOrderCookComponent implements OnInit {
  @Input() data!: Order;
  public dateOrder: string = '';
  public classNew: string = '';
  public valueBtn: string = '';
  public btnStatus: string = '';
  //public imgStatus: string = '';
  constructor(public ordersService: OrdersService) { }

  ngOnInit(): void {
    this.dateOrder = this.data.dateEntry.split(' ').splice(1, 4).toString().replace(/,+/g, ' ');
    this.valueBtn = 'Recibido';
    this.btnStatus = 'btnPedido';
    //this.imgStatus = '../../../../assets/bell.png';
  }
  /* cutNameProducto(item: string ){
    return item.split(' ').splice(0, 3).toString().replace(/,+/g, ' ')
  } */
  changeStatus(){
    this.data.status='delivering';
    /* this.valueBtn = 'Listo';
    this.btnStatus = 'btnEnPreparacion'; */
    //this.imgStatus = '../../../../assets/enpreparacion.png';
    console.log(this.data);

    //this.ordersService.setOrders(this.data);
    /*this.classNew = 'hide';*/

  }
}
