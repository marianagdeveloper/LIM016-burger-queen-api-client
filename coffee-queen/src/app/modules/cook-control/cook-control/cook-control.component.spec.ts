import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCookComponent } from './view-cook.component';

describe('ViewCookComponent', () => {
  let component: ViewCookComponent;
  let fixture: ComponentFixture<ViewCookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewCookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
