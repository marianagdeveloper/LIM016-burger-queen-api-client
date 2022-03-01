import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CookDeliveringComponent } from './cook-delivering.component';

describe('CookDeliveringComponent', () => {
  let component: CookDeliveringComponent;
  let fixture: ComponentFixture<CookDeliveringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CookDeliveringComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CookDeliveringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
