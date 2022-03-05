import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../data/services/api/product.service';
import { Product, Products } from '../../../shared/components/card/card-product/card-product.metadata';

//@Pipe({filter:'filter'})

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent implements OnInit {
  public products?: any[];
  public todos!: any[];
  public getProduct: string = '';
  public array: any;
  public arrayPrueba: any[] = [];
  public dataProducts: any = {
    qty: 0,
    subTotal: 0,
    product: {
      _id: '',
      name: '',
      price: 0,
      image: '',
      type: '',
      dateEntry: ''
    }
  };

  constructor(public productService: ProductService) {}

  ngOnInit() {


    /* this.dataProducts.product._id = this.data._id;
    this.dataProducts.product.name = this.data.name;
    this.dataProducts.product.price = this.data.price;
    this.dataProducts.product.image = this.data.image;
    this.dataProducts.product.type = this.data.type;
    this.dataProducts.product.dateEntry = this.data.dateEntry;
    this.dataProducts.product.messageCard = this.data.messageCard; */
    this.cleanSearch();
  }

  searchProduct() {
    this.productService.getAllProducts().subscribe((data) => {
      this.products = data;
      this.todos = this.productService.arrayProducts;
      if (this.getProduct === '') {
        this.products = data;
      } else {
        this.products.forEach((producto) => {
          this.todos.forEach((pedido) => {
            if (pedido.name == producto.name) {
              producto.qty = pedido.qty;
              producto.messageCard = pedido.messageCard;
            }
          });
        });

        this.products = this.products?.filter(
          (elem) => elem.name.toLowerCase().indexOf(this.getProduct) > -1
        );
      }
    });
  }

  cleanSearch() {
    this.productService.getAllProducts().subscribe((data) => {
      this.products = data;
      let dataProducts: any = {
        qty: 0,
        subTotal: 0,
        product: {
          _id: '',
          name: '',
          price: 0,
          image: '',
          type: '',
          dateEntry: ''
        }
      };
      console.log(this.products);

      data.forEach((producto) => {
        console.log('antes de asignar',producto);
        console.log('dataProductsssss', dataProducts);

        dataProducts.product._id = producto._id;
        dataProducts.product.name = producto.name;
        dataProducts.product.price = producto.price;
        dataProducts.product.image = producto.image;
        dataProducts.product.type = producto.type;
        dataProducts.product.dateEntry = producto.dateEntry;
        dataProducts.product.messageCard = producto.messageCard;
        console.log('despues de asignar',dataProducts);

        this.arrayPrueba.push(dataProducts)
      })
      console.log(this.arrayPrueba);


      this.todos = this.productService.arrayProducts;

      this.arrayPrueba.forEach((producto) => {
        this.todos.forEach((pedido) => {

          if (pedido.name == producto.product.name) {
            producto.qty = pedido.qty;
            producto.product.messageCard = pedido.messageCard;
          }
        });
      });
    });
    this.getProduct = '';
  }
}
