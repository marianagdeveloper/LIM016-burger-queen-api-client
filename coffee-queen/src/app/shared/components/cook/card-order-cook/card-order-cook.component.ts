import { Component, OnInit, Input } from '@angular/core';
import { Order } from '../../../../modules/orders/order-list/order-list.metadata';
import { ProductService } from '../../../../data/services/api/product.service';

@Component({
  selector: 'app-card-order-cook',
  templateUrl: './card-order-cook.component.html',
  styleUrls: ['./card-order-cook.component.scss']
})
export class CardOrderCookComponent implements OnInit {
  @Input() data!: Order;
  public dateOrder: string = '';
  public classNew: string = '';
  constructor(public productService: ProductService) { }

  ngOnInit(): void {
    this.dateOrder = this.data.dateEntry.split(' ').splice(1, 4).toString().replace(/,+/g, ' ');
  }
  /* cutNameProducto(item: string ){
    return item.split(' ').splice(0, 3).toString().replace(/,+/g, ' ')
  } */
  changeStatus(){
    this.data.status='En Preparación';
    this.classNew = 'hide';
    console.log(this.data);
  }
}
