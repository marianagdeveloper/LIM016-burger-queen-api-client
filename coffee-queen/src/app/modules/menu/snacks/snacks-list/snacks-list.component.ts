import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/data/services/api/product.service';
import { ICardProduct } from '../../../../shared/components/card/card-product/card-product.metadata';

@Component({
  selector: 'app-snacks-list',
  templateUrl: './snacks-list.component.html',
  styleUrls: ['./snacks-list.component.scss']
})
export class SnacksListComponent implements OnInit {

  public products!: ICardProduct[];

  public snacks!: ICardProduct[];


  constructor(public productService: ProductService) {}

  ngOnInit() {
    this.productService.getAllProducts().subscribe(data => {
      this.products = data;
      function filtrarPorType(obj:ICardProduct): any {
        if (obj.type === "snacks") {
          return obj;
        }
      }
      this.snacks = data.filter(filtrarPorType);

    });
  }

}
