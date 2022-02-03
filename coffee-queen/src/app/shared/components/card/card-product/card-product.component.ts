import { Component, Input, OnInit } from '@angular/core';
import { ICardProduct } from './card-product.metadata';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.scss']
})
export class CardProductComponent implements OnInit {
  @Input() data?: ICardProduct; /* = {
    name: "Cafe Americano",
    price: 7,
    image: "../../../../../assets/images/cafe_americano.jpg"
  } */
  constructor() { }

  ngOnInit(): void {
  }

}
