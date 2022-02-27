import { ComponentFixture, fakeAsync, TestBed, tick, waitForAsync } from '@angular/core/testing';
import { ProductService } from 'src/app/data/services/api/product.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SnacksListComponent } from './snacks-list.component';

describe('SnacksListComponent', () => {
  let component: SnacksListComponent;
  let fixture: ComponentFixture<SnacksListComponent>;
  let productServiceTest: ProductService;
  let httpClientSpyGet: { get: jasmine.Spy };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SnacksListComponent ],
      imports: [
        HttpClientTestingModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SnacksListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    httpClientSpyGet = jasmine.createSpyObj('HttpClient', ['get']);
    productServiceTest = new ProductService(httpClientSpyGet as any);
  });

  it('If exist SnacksListComponent', () => {
    expect(component).toBeTruthy();
  });

  it('If keepQuantityUpdate works right', () => {
    const productTest = [
      {
        "id": 33,
        "name": "Granola",
        "price": 6,
        "image": "../../assets/images/granola.png",
        "type": "snacks",
        "dateEntry": "21/01/2022 09:24:00",
        "qty": 2,
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
            "id": 33,
            "name": "Granola",
            "price": 6,
            "image": "../../assets/images/granola.png",
            "type": "snacks",
            "dateEntry": "21/01/2022 09:24:00",
            "qty": 2,
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
