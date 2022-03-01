import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardOrderCookComponent } from './card-order-cook.component';

describe('CardOrderComponent', () => {
  let component: CardOrderCookComponent;
  let fixture: ComponentFixture<CardOrderCookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardOrderCookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardOrderCookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
