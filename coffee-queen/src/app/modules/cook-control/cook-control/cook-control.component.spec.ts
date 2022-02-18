import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CookControlComponent } from './cook-control.component';

describe('CookControlComponent', () => {
  let component: CookControlComponent;
  let fixture: ComponentFixture<CookControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CookControlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CookControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
