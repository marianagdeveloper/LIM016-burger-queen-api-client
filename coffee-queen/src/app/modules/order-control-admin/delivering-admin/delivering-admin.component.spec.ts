import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveringAdminComponent } from './delivering-admin.component';

describe('DeliveringAdminComponent', () => {
  let component: DeliveringAdminComponent;
  let fixture: ComponentFixture<DeliveringAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeliveringAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveringAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
