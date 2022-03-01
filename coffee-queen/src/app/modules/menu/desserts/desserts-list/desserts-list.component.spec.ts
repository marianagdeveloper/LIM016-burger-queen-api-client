import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DessertsListComponent } from './desserts-list.component';
import { ProductService } from '../../../../data/services/api/product.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('DessertsListComponent', () => {
  let component: DessertsListComponent;
  let fixture: ComponentFixture<DessertsListComponent>;
  let productServiceTest: ProductService;
  let httpClientSpyGet: { get: jasmine.Spy };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DessertsListComponent ],
      imports: [
        HttpClientTestingModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DessertsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    httpClientSpyGet = jasmine.createSpyObj('HttpClient', ['get']);
    productServiceTest = new ProductService(httpClientSpyGet as any);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('If keepQuantityUpdate works right', () => {
    const productTest = [
      {
        "id": 14,
        "name": "Brownie",
        "price": 6,
        "image": "../../assets/images/brownie.png",
        "type": "desserts",
        "dateEntry": "21/01/2022 09:24:00",
        "qty": 1,
        "subTotal": 6
      }
    ]
    const orderTest = [
      {
        "id": 1,
        "userName": "Maria",
        "client": "Juanita",
        "products": [
          {
            "id": 14,
            "name": "Brownie",
            "price": 6,
            "image": "../../assets/images/brownie.png",
            "type": "desserts",
            "dateEntry": "21/01/2022 09:24:00",
            "qty": 1,
            "subTotal": 6
          }
        ],
        "total": 30,
        "totalQty": 2,
        "numberTable": "1",
        "status": "delivered",
        "dateEntry": "Sun Feb 20 2022 17:59:36 GMT-0500 (hora estándar de Colombia)",
        "dateDelivering": "Sun Feb 20 2022 18:00:27 GMT-0500 (hora estándar de Colombia)",
        "dateDone": "Sun Feb 20 2022 18:01:14 GMT-0500 (hora estándar de Colombia)",
        "timeResult": "00:00:47",
        "dateProcessed": "Sun Feb 20 2022 18:01:50 GMT-0500 (hora estándar de Colombia)",
        "dateCanceled": "",
        "additional": ""
      }

    ]
    component.keepQuantityUpdate(productTest, orderTest);
    //expect(productTest[0].qty).toBe(orderTest[0].products[0].qty);
  });
});
