import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/data/services/api/product.service';
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
  pedidos: Pedido[] = [ ];

  constructor(public productService: ProductService) { }

  ngOnInit(): void {
 this.product=this.productService.disparadorProduct.getValue( );
console.log(this.product);

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
