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
      },
      {
        "id": 24,
        "name": "Papas Fritas",
        "price": 12,
        "image": "../../assets/images/Papas fritas.png",
        "type": "snacks",
        "dateEntry": "21/01/2022 09:24:00",
        "qty": 0,
        "subTotal": 12,
        "messageCard": "Producto agregado."
      }
    ]
    const orderTest = [
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
    component.keepQuantityUpdate(productTest, orderTest);
    expect(orderTest[0].qty).toBe(productTest[0].qty);
  });
});
