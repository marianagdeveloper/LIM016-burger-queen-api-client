import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Product } from 'src/app/shared/components/card/card-product/card-product.metadata';
import { ProductService } from './../../../data/services/api/product.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product-control',
  templateUrl: './product-control.component.html',
  styleUrls: ['./product-control.component.scss'],
})
export class ProductControlComponent implements OnInit {
  public products!: Product[];
  public productsAdd: Product = {
    id: 104,
    name: '',
    price: 0,
    image: {},
    type: '',
    qty: 0,
    subTotal: 0,
    dateEntry: '',
  };
  public arrayCategory: string[] = [];
  public description: string = '';
  public previsualizacion: string = '';
  public optionSelected: string = '';
  public priceProduct: any;
  public fileCaptured: any;
  public loading: boolean=false;
  constructor(
    private sanitizer: DomSanitizer,
    public productsService: ProductService,
    private http: HttpClient
  ) {
    this.arrayCategory = [
      'cafés/tés','jugos','bebidas','snacks','postres','hamburguesas',];
  }
  ngOnInit(): void {
    this.productsService.getAllProducts().subscribe((data: any) => {
      this.products = data;
    });
  }
  addProduct() {
    this.loading=true;

    const dateEntryInt = new Date().toString();
    this.productsAdd.dateEntry = dateEntryInt.split(' ').splice(0, 4).toString().replace(/,+/g, ' ');
    this.productsAdd.name = this.description;
    this.productsAdd.type = this.optionSelected;
    this.productsAdd.price = this.priceProduct;
    this.productsAdd.image = this.fileCaptured[0];
    console.log(typeof(this.fileCaptured[0]) );
    
    console.log(this.productsAdd.image);

  this.http.post<Product[]>('http://localhost:3000/products',  this.productsAdd).subscribe( (res:any) => {
    this.loading=false;
     
      console.log(res);
      
    });

  }
  capturarImage(event: any) {
    this.fileCaptured = event.target.files;
    this.extraerBase64(this.fileCaptured).then((imagen: any) => {
      this.previsualizacion = imagen.base;
    });
  }
  extraerBase64 = async ($event: any) =>
    new Promise((resolve, reject) => {
      try {
        console.log($event);

        const unsafeImg = window.URL.createObjectURL($event[0]);
        console.log(unsafeImg);

        const image = this.sanitizer.bypassSecurityTrustUrl(unsafeImg);
        const reader = new FileReader();
        reader.readAsDataURL($event[0]);
        reader.onload = () => {
          resolve({
            base: reader.result,
          });
        };
        reader.onerror = (error) => {
          resolve({
            base: null,
          });
        };
      } catch (e) {
        reject(e);
      }
    });
}
