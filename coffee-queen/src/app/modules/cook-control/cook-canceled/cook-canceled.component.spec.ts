import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CookCanceledComponent } from './cook-canceled.component';

describe('CookCanceledComponent', () => {
  let component: CookCanceledComponent;
  let fixture: ComponentFixture<CookCanceledComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CookCanceledComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CookCanceledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
