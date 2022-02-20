import { Component, OnInit} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Product } from 'src/app/shared/components/card/card-product/card-product.metadata';
import { ProductService } from './../../../data/services/api/product.service';
import { HttpClient } from '@angular/common/http';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-product-control',
  templateUrl: './product-control.component.html',
  styleUrls: ['./product-control.component.scss'],
})
export class ProductControlComponent implements OnInit {
  public products!: Product[];
  //public file: File = {} as File
  public productsAdd: Product = {
    id: 0,
    name: '',
    price: 0,
    image:'',
    
    type: '',
    qty: 0,
    subTotal: 0,
    dateEntry: '',
  };
  public arrayCategory: string[] = [];
  public filesImage: any[] = [];
  public description: string = '';
  public previsualizacion: string = '';
  public optionSelected: string = '';
  public priceProduct: any;
  public fileCaptured: any;
  public loading: boolean=false;
  public prueba:any;
  closeResult = '';
  comment = '';
  setcomment = '';
  imagenPrevia: any;
  files: any = []
  //loading: boolean;
  constructor(
    private sanitizer: DomSanitizer,
    public productsService: ProductService,
    private http: HttpClient,
    private modalService: NgbModal,
  ) {
    this.arrayCategory = [
      'cafés/tés','jugos','bebidas','snacks','postres','hamburguesas'];
  }
 
  ngOnInit(): void {
    this.productsService.getAllProducts().subscribe((data: any) => {
      this.products = data;
    });
    this.optionSelected='Seleccione categoria'
  }

  public onFileSelected(event: any) {

    const imagen = event.target.files[0];
    console.log(imagen);
    if ('image/png'.includes(imagen.type)) {
      console.log('Si es una imagen');
      this.files.push(imagen)
      this.blobFile(imagen).then((res: any) => {
        this.imagenPrevia = res.base;

      })
    } else {
      console.log('No es imagen');

    }
  }


  loadImages = () => {
    try {
      /* const formData = new FormData();
      this.files.forEach((item:any) => {
        formData.append('image', item)
      });
      this.loading = true; */

      const dateEntryInt = new Date().toString();
        this.productsAdd.dateEntry = dateEntryInt.split(' ').splice(0, 4).toString().replace(/,+/g, ' ');
        this.productsAdd.name = this.description;
        switch (this.optionSelected) {
          case  'cafés/tés':
            this.productsAdd.type ='cafes'
            break;
          case 'jugos':
            this.productsAdd.type ='juices'
            break;
          case 'bebidas':
            this.productsAdd.type ='drinks'
            break;
          case  'snacks':
            this.productsAdd.type ='snacks'
            break;
          case 'postres':
            this.productsAdd.type ='desserts'
            break;
          case 'hamburguesas':
            this.productsAdd.type ='hamburguers'
            break;
        }
        this.productsAdd.price = this.priceProduct;
        this.productsAdd.image =  "../../assets/images/default.png";
     this.productsService.post(`http://localhost:3000/products`,  this.productsAdd)
     .subscribe(res => {
       this.loading = false;
       console.log('Carga exitosa', res);


     });
    } catch (e) {
      console.log('ERROR', e);

    }
  }


  blobFile = async ($event: any) => new Promise((resolve, reject) => {
    try {
      const unsafeImg = window.URL.createObjectURL($event);
      const image = this.sanitizer.bypassSecurityTrustUrl(unsafeImg);
      const reader = new FileReader();
      reader.readAsDataURL($event);
      
      reader.onload = () => {
        resolve({
          blob: $event,
          image,
          base: reader.result
        });
      };
      reader.onerror = error => {
        resolve({
          blob: $event,
         image,
          base: null
        });
      };

    } catch (e) {
      reject(e)
    }
  })


  
  
  
  deleteUser(idProduct: number) {
    this.productsService.deleteProduct(idProduct);
    const data = this.products.filter((item: any) => item.id != idProduct);
    this.products = data;
  }


 /*  addProduct() {
    const dateEntryInt = new Date().toString();
    const dateProduct = dateEntryInt.split(' ').splice(0, 4).toString().replace(/,+/g, ' ');
  
   

    try {

      const formProductAdd = new FormData();
     
      this.filesImage.forEach(fileImage=>{
        console.log(fileImage);
        formProduct.append('image',fileImage);
        console.log(formProduct);
        
      })
      formProduct.append('name',this.description)
      formProduct.append('type',this.optionSelected)
      formProduct.append('price',this.priceProduct)
      formProduct.append('dateEntry',dateProduct)
      console.log("contenido de formproduct",formProductAdd);
      
      this.http.post<Product[]>('http://localhost:3000/products',  formProductAdd)
      .subscribe( (res:any) => {
      console.log("respuesta del post",res);
      return res;
      
    });
      
    } catch (error) {
      
    }

  } */

/*   capturarImage(event: any) {
    this.fileCaptured = event.target.files[0];
    this.extraerBase64(this.fileCaptured).then((imagen: any) => {
      this.previsualizacion = imagen.base;
    });
    this.filesImage.push( this.fileCaptured)
    
  }
  extraerBase64 = async ($event: any) =>
    new Promise((resolve, reject) => {
      try {
        console.log($event);

        const unsafeImg = window.URL.createObjectURL($event);
        console.log(unsafeImg);

        const image = this.sanitizer.bypassSecurityTrustUrl(unsafeImg);
        const reader = new FileReader();
        reader.readAsDataURL($event);
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
 */


    open(content: any) {
      this.modalService
        .open(content, {
          ariaLabelledBy: 'modal-basic-title',
          windowClass: 'custom-class',
          scrollable: true,
          backdrop: false,
          keyboard: false,
        })
        .result.then(
          (result) => {
            this.closeResult = `Closed with: ${result}`;
            console.log('this.closeResult', this.closeResult);
            console.log('result', result);
    
            this.setcomment = this.comment;
          },
          (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
          }
        );
    }
    private getDismissReason(reason: any): string {
      if (reason === ModalDismissReasons.ESC) {
        return 'by pressing ESC';
      } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
        return 'by clicking on a backdrop';
      } else {
        return `with: ${reason}`;
      }
    }
}




/*  const dateEntryInt = new Date().toString();
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

    }); */