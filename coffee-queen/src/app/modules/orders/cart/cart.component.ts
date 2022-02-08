import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/data/services/api/product.service';
import { ICardProduct } from '../../../shared/components/card/card-product/card-product.metadata';
interface Pedido {
  item: string,
  cantidad: number,
  precio: number,
  stock: number
  total: number,
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
public  product:any;
  pedidos: ICardProduct[] = [ ];
  public total: number=0;
  constructor(public productService: ProductService) { }

  ngOnInit(): void {
    this.product = this.productService.arrayProducts;
    console.log(this.product);
    //this.pedidos.push(this.product);
    this.total = this.product.price;
  }

  aumentarCantidad(pedido: Pedido): void{
    if(pedido.stock > pedido.cantidad) {
      pedido.cantidad += 1;
    }

  }

  disminuirCantidad(pedido: Pedido): void{
    if(pedido.cantidad>0){
      pedido.cantidad -= 1;
    }
  }

}
