import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CookHistoryComponent } from './cook-history.component';

describe('CookHistoryComponent', () => {
  let component: CookHistoryComponent;
  let fixture: ComponentFixture<CookHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CookHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CookHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
