import { Component, OnInit } from '@angular/core';
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

  pedidos: Pedido[] = [
    {
      item: "Cafe americano",
      cantidad: 1,
      precio: 8,
      stock: 20,
      total: 8
    },
    {
      item: "Café con leche",
      cantidad: 2,
      precio: 15,
      stock: 15,
      total: 30
    },
    {
      item: "Sandwich de jamón y queso",
      cantidad: 4,
      precio: 10,
      stock: 5,
      total: 40
    },
    {
      item: "Jugo de frutas natural",
      cantidad: 1,
      precio: 12,
      stock: 15,
      total: 12
    }
  ]

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
