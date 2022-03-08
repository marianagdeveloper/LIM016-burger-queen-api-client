import { of } from 'rxjs';

import { ProductService } from './product.service';
import { TestBed } from '@angular/core/testing';
import { Product, Products } from 'src/app/shared/components/card/card-product/card-product.metadata';


describe('(4) Test of Service ProductService', () => {
  let serviceGet: ProductService;
  let httpClientSpyGet: { get: jasmine.Spy };
  let servicePost: ProductService;
  let httpClientSpyPost: { post: jasmine.Spy };
  let servicePut: ProductService;
  let httpClientSpyPut: { put: jasmine.Spy };
  let serviceDelete: ProductService;
  let httpClientSpyDelete: { delete: jasmine.Spy };

  beforeEach(() => {
    httpClientSpyGet = jasmine.createSpyObj('HttpClient', ['get']);
    serviceGet = new ProductService(httpClientSpyGet as any);
    httpClientSpyPost = jasmine.createSpyObj('HttpClient', ['post']);
    servicePost = new ProductService(httpClientSpyPost as any);
    httpClientSpyPut = jasmine.createSpyObj('HttpClient', ['put']);
    servicePut = new ProductService(httpClientSpyPut as any);
    httpClientSpyDelete = jasmine.createSpyObj('HttpClient', ['delete']);
    serviceDelete = new ProductService(httpClientSpyDelete as any);
  });

  it('Should be created service', () => {
    expect(serviceGet).toBeTruthy();
  });
  it('Should be get products', (done: DoneFn) => {

    const mockProductResult =

          {
            "_id": '4',
            "name": "Jugo de frutas natural",
            "price": 12,
            "image": "../../assets/images/Jugo de frutas natural.png",
            "type": "juices",
            "dateEntry": "21/01/2022 09:24:00",
            "qty": 1,
            "subTotal": 12
          }

    httpClientSpyGet.get.and.returnValue(of(mockProductResult));
    serviceGet.getAllProducts().subscribe((res: any) => {
      expect(res).toEqual(mockProductResult);
    });
    done();
  });
  it('Should be create product', (done: DoneFn) => {
    const mockProductResult = {
        "_id": '4',
        "name": "Jugo de frutas natural",
        "price": 12,
        "image": "../../assets/images/Jugo de frutas natural.png",
        "type": "juices",
        "dateEntry": "21/01/2022 09:24:00",
        "qty": 1,
        "subTotal": 12
     }



    httpClientSpyPost.post.and.returnValue(of(mockProductResult));
    servicePost.post(mockProductResult).subscribe((res: any) => {
      expect(res).toEqual(mockProductResult);
    });
    done();
  });
  it('Should be update product', (done: DoneFn) => {
    const mockProduct = {

        "_id": '4',
        "name": "Jugo de frutas natural",
        "price": 12,
        "image": "../../assets/images/Jugo de frutas natural.png",
        "type": "juices",
        "dateEntry": "21/01/2022 09:24:00",
        "qty": 1,
        "subTotal": 12

    }


    const mockProductResult = {
        "_id": '4',
        "name": "Jugo fresas",
        "price": 10,
        "image": "../../assets/images/Jugo de fresas.png",
        "type": "juices",
        "dateEntry": "21/01/2022 09:24:00",
        "qty": 1,
        "subTotal": 12

    }
    httpClientSpyPut.put.and.returnValue(of(mockProductResult));
    servicePut.putProductApi(mockProduct, mockProduct._id).subscribe((res: any) => {
      expect(res).toEqual(mockProductResult);
    });
    done();
  });
  it('Should be delete product', (done: DoneFn) => {
    const mockProductCredentials = '4';
    const mockProductResult = { };
    httpClientSpyDelete.delete.and.returnValue(of(mockProductResult));
    serviceDelete.deleteProduct(mockProductCredentials).subscribe((res: any) => {
      expect(res).toEqual(mockProductResult);
    });
    done();
  });
  it('Should be function set product', () => {
    const product=
    {
      "_id": 4,
      "name": "Jugo fresas",
      "price": 10,
      "image": "../../assets/images/Jugo de fresas.png",
      "type": "juices",
      "dateEntry": "21/01/2022 09:24:00",
      "qty": 1,
      "subTotal": 12
    };
    const arrayProduct=
    [
    {
      "_id": 4,
      "name": "Jugo fresas",
      "price": 10,
      "image": "../../assets/images/Jugo de fresas.png",
      "type": "juices",
      "dateEntry": "21/01/2022 09:24:00",
      "qty": 1,
      "subTotal": 12
    }
  ];
   /*  const setProductFn=serviceGet.setProducts(product);
    expect(setProductFn).toBe(arrayProduct);
 */
  });

});
