import { Pipe, PipeTransform } from '@angular/core';
import { Order, OrderRecive } from '../../orders/order-list/order-list.metadata';

@Pipe({
  name: 'filterStatusAdmin',
  pure:false
})
export class FilterStatusAdminPipe implements PipeTransform {

  transform(items: OrderRecive[], filter: string): any {
    return items.filter(item => item.status == filter);
  }

}
