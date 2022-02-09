import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/data/services/api/product.service';
import { ICardProduct } from 'src/app/shared/components/card/card-product/card-product.metadata';

interface orderProducts {
  id: number;
  name: string;
  price: number;
  image: string;
  type: string;
  dateEntry: string;
  qty: number;
  subTotal: number;
}
interface Order {
  _id: number;
  userId: number;
  client: string;
  products: orderProducts[];
  total: number;
  status: string;
  dateEntry: string;
  dateProcessed: string;
}
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  public products!: ICardProduct[];
  public order: Order = {
    _id: 0,
    userId: 0,
    client: '',
    products: [
      {
        id: 0,
        name: '',
        price: 0,
        image: '',
        type: '',
        dateEntry: '',
        qty: 0,
        subTotal: 0,
      },
    ],
    total: 0,
    status: '',
    dateEntry: '',
    dateProcessed: '',
    //Añadir qties no te olvides!
  };
  public subTotal: number = 0;
  public total: number = 0;
  public deleteSubtotal: number = 0;
  public newVariable: number = 0;
  public cant: number = 0;
  public nameProduct: string = '';

  constructor(public productService: ProductService) {}
  ngOnInit(): void {
    this.arrayNew = this.productService.newArrayProducts;
    this.products = this.productService.arrayProducts;
    this.productsEliminados = this.productService.eliminadosProducts;
    console.log(this.productsEliminados);
    if (this.arrayNew.length === 0) {
      this.products = this.productService.arrayProducts;
      console.log('product si esta vacio arraynew', this.products);
    } else {
      console.log('antes de push', this.products);
      this.products.filter((productos: any) => {
        this.productsEliminados.forEach((ele: any) => {
          if (productos.name !== ele.name) {
            console.log('entraste', productos.name);
            this.nuevisimoArray.push(productos);
          }
        });
      });
      this.products = this.nuevisimoArray;
      console.log('despues de push', this.products);
    }
    this.products.map((ele: any) => {
      this.order.total += ele.price;
    });
  }
  aumentarCantidad(product: any) {
    this.cant = product.qty += 1;
    product.subTotal = this.cant * product.price;
    this.order.total += product.subTotal;
    this.order.total -= product.price * (this.cant - 1);
  }
  disminuirCantidad(product: any) {
    if (product.qty < 2) {
      product.qty = 1;
      product.subTotal = product.price;
    } else {
      this.cant = product.qty -= 1;
      product.subTotal = this.cant * product.price;
      this.order.total -= product.subTotal;
      this.order.total += product.price * (this.cant - 1);
    }

    return this.order.total;
  }
  public arrayNew: ICardProduct[] = [];
  public eliminados: ICardProduct[] = [];
  public productsEliminados: ICardProduct[] = [];
  public nuevisimoArray: ICardProduct[] = [];
  deleteProduct(product: any) {
    this.products.filter((item: any) => {
      if (item.name !== product.name) {
        this.arrayNew.push(item);
      } else {
        this.eliminados.push(item);
        this.deleteSubtotal = product.subTotal - product.price;
      }
    });
    this.products = this.arrayNew;
    this.productService.setProducts(this.arrayNew[0]);
  /*   this.productService.setNewProducts(this.arrayNew[0]);
    this.productService.setEliminadosProducts(this.eliminados[0]); */
    if (product.qty > 1) {
      this.order.total = this.disminuirCantidad(product) - this.deleteSubtotal;
    } else {
      this.order.total = this.disminuirCantidad(product) - product.price;
    }
  }
}
