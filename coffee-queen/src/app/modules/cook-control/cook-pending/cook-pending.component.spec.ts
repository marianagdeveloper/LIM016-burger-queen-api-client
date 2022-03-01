import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CookPendingComponent } from './cook-pending.component';

describe('CookPendingComponent', () => {
  let component: CookPendingComponent;
  let fixture: ComponentFixture<CookPendingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CookPendingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CookPendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
