import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterCookComponent } from './footer-cook.component';

describe('FooterCookComponent', () => {
  let component: FooterCookComponent;
  let fixture: ComponentFixture<FooterCookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterCookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterCookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
