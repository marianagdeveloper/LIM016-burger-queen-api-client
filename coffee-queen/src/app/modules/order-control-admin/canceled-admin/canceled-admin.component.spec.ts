import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanceledAdminComponent } from './canceled-admin.component';

describe('CanceledAdminComponent', () => {
  let component: CanceledAdminComponent;
  let fixture: ComponentFixture<CanceledAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CanceledAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CanceledAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
