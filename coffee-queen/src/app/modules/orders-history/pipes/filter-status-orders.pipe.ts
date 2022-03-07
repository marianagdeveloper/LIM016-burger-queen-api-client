import { Pipe, PipeTransform } from '@angular/core';
import { Order, OrderRecive } from '../../orders/order-list/order-list.metadata';

@Pipe({
  name: 'filterStatusOrders',
  pure:false
})
export class FilterStatusOrdersPipe implements PipeTransform {

  transform(items: OrderRecive[], filter: any, userId:any): any {
    return items.filter(item => item.status == filter).filter(ele=>ele.userId == userId);
  }

}
