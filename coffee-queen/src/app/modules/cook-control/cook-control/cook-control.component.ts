import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from '../../../data/services/api/product.service';
import { Order } from '../../orders/order-list/order-list.metadata';

@Component({
  selector: 'app-cook-control',
  templateUrl: './cook-control.component.html',
  styleUrls: ['./cook-control.component.scss']
})
export class CookControlComponent implements OnInit {

  public orders?: Order[];

  constructor(public productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getOrder().subscribe((data) => {
      this.orders = data;
      //console.log(data);


    });
  }
  navigateToSection(section: string) {
    window.location.hash = '';
    window.location.hash = section;
  }

}
