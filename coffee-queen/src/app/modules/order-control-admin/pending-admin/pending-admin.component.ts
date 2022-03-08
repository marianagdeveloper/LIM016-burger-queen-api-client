import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/data/services/api/orders.service';
import { UsersService } from 'src/app/data/services/api/users.service';
import {
  Order,
  OrderRecive,
} from '../../orders/order-list/order-list.metadata';

@Component({
  selector: 'app-pending-admin',
  templateUrl: './pending-admin.component.html',
  styleUrls: ['./pending-admin.component.scss'],
})
export class PendingAdminComponent implements OnInit {
  public orders: OrderRecive[] = [];
  public ordersFilter: OrderRecive[] = [];
  public pruebaId: string='';
  public viewList: string='';
  public getOrder: string='pending';
  constructor(
    public ordersService: OrdersService,
    public userService: UsersService
  ) {}
  ngOnInit(): void {
    this.ordersService.getOrder().subscribe((data) => {
      this.orders = data;
      this.orders.map((ele) => {
        this.userService.getUserByEmail(ele.userId).subscribe((res) => {
            ele.userId=res.nameUser;
          });
      });
      this.ordersFilter = this.orders?.filter((elem) =>(elem.status==this.getOrder))

      if( this.ordersFilter.length>0){
        this.viewList='d-block'
      }else{
        this.viewList='d-none'
      }
    });
  }
  cutNameProduct(item: string) {
    return item.split(' ').splice(1, 4).toString().replace(/,+/g, ' ');
  }
}
