import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/data/services/api/orders.service';
import { OrderRecive } from '../../orders/order-list/order-list.metadata';
import { UsersService } from '../../../data/services/api/users.service';

@Component({
  selector: 'app-delivering-admin',
  templateUrl: './delivering-admin.component.html',
  styleUrls: ['./delivering-admin.component.scss']
})
export class DeliveringAdminComponent implements OnInit {
  public orders: OrderRecive[] = [];
  public ordersFilter: OrderRecive[] = [];
  public pruebaId: string='';
  public viewList: string='';
  public getOrder: string='delivering';
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
  cutNameProduct(item: string ){
    return item.split(' ').splice(1, 4).toString().replace(/,+/g, ' ');
  }
}
