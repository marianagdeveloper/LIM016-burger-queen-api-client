import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuicesListComponent } from './juices-list.component';

describe('JuicesListComponent', () => {
  let component: JuicesListComponent;
  let fixture: ComponentFixture<JuicesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JuicesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JuicesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
