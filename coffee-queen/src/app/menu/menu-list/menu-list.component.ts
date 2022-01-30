import { Component, OnInit } from '@angular/core';

interface Desayuno {
  item: string,
  cantidad: number,
  precio: number,
  stock: number,
}

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.scss']
})
export class MenuListComponent implements OnInit {

  desayunos: Desayuno[] = [
    {
    item: "Cafe americano",
    cantidad: 0,
    precio: 5,
    stock: 20,
    },
    {
      item: "Café con leche",
      cantidad: 0,
      precio: 7,
      stock: 15,
    },
    {
      item: "Sandwich de jamón y queso",
      cantidad: 0,
      precio: 10,
      stock: 0,
    },
    {
      item: "Jugo de frutas natural",
      cantidad: 0,
      precio: 7,
      stock: 15,
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

  aumentarCantidad(desayuno: Desayuno): void{
    if(desayuno.stock > desayuno.cantidad) {
      desayuno.cantidad += 1;
    }

  }

  disminuirCantidad(desayuno: Desayuno): void{
    if(desayuno.cantidad>0){
      desayuno.cantidad -= 1;
    }

  }

  verificaCantidadInput(desayuno: Desayuno): void{
    if(desayuno.stock < desayuno.cantidad){
      alert("No hay stock");
      desayuno.cantidad = desayuno.stock;
    }
    if(desayuno.cantidad < 0){
      alert("No es una cantidad válida");
      desayuno.cantidad = 0;
    }
  }
}
