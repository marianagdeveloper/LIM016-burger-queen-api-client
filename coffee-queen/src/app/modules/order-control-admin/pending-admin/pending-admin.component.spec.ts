import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingAdminComponent } from './pending-admin.component';

describe('PendingAdminComponent', () => {
  let component: PendingAdminComponent;
  let fixture: ComponentFixture<PendingAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PendingAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
