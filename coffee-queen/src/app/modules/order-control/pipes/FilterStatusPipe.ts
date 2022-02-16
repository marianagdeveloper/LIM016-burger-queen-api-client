import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filterStatus',
    pure: false
})
export class FilterStatusPipe implements PipeTransform {

    transform(items: any[], filter: string): any {
        return items.filter(item => item.status == filter);
    }
}

// filterPending: tagPending
