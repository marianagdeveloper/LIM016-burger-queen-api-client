import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoneAdminComponent } from './done-admin.component';

describe('DoneAdminComponent', () => {
  let component: DoneAdminComponent;
  let fixture: ComponentFixture<DoneAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoneAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoneAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
