import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../data/services/api/product.service';
import { Product } from '../../../shared/components/card/card-product/card-product.metadata';

//@Pipe({filter:'filter'})

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent implements OnInit {

  public products?: Product[];
  public getProduct: string = '';
  public array: any;

  constructor(public productService: ProductService) {}

  ngOnInit() {
    this.cleanSearch();
  }
  searchProduct() {
    console.log('entrastre');
    this.productService.getAllProducts().subscribe((data) => {
      if(this.getProduct===""){
        this.products = data;
      }else{
      this.products = data;
      this.products = this.products?.filter(
        (elem) => elem.name.toLowerCase().indexOf(this.getProduct) > -1
      );
    }
    });
  }
  cleanSearch(){
    this.productService.getAllProducts().subscribe((data) => {
      this.products = data;
    });
    this.getProduct='';
  }
}
