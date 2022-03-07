import { Component, OnInit } from '@angular/core';
import { OrdersService } from './../../../data/services/api/orders.service';
import { Order, OrderRecive } from 'src/app/modules/orders/order-list/order-list.metadata';
import { UsersService } from '../../../data/services/api/users.service';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss']
})
export class SalesComponent implements OnInit {
  public orders: OrderRecive[] = [];
  public idPrueba:string='';
  public nameUser: string = '';
  constructor(public ordersService: OrdersService,public userService: UsersService ) {}

  ngOnInit(): void {
    this.ordersService.getOrder().subscribe((res: any) => {
      this.orders = res;
      return this.orders;
    });
    this.idPrueba = this.userService.disparador.getValue()._id;
    this.userService.getUserByEmail(this.idPrueba).subscribe((res)=>{
      this.nameUser = res.nameUser;
    })
  }
  cutNameProduct(item: string ){
    return item.split(' ').splice(1, 4).toString().replace(/,+/g, ' ');
  }

}
