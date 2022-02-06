import { Component, OnInit } from '@angular/core';
interface Pedido {
  item: string,
  cantidad: number,
  precio: number,
  stock: number,
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  pedidos: Pedido[] = []

  constructor() { }

  ngOnInit(): void {
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
