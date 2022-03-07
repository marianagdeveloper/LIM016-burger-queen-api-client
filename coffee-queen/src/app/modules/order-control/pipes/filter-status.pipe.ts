import { Pipe, PipeTransform } from '@angular/core';
import {Order} from '../../orders/order-list/order-list.metadata';
@Pipe({
  name: 'filterStatus',
  pure: false
})
export class FilterStatusPipe implements PipeTransform {

  transform(items: Order[], filter: any, userId:any): any {
    return items.filter(item => item.status == filter).filter(ele=>ele.userId == userId);
  }

}
