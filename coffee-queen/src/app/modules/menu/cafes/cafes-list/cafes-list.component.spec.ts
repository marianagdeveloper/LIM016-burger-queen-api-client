import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CafesListComponent } from './cafes-list.component';

describe('CafesListComponent', () => {
  let component: CafesListComponent;
  let fixture: ComponentFixture<CafesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CafesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CafesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
