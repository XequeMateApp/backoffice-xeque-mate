import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuppliersCustomersComponent } from './suppliers-customers.component';

describe('SuppliersCustomersComponent', () => {
  let component: SuppliersCustomersComponent;
  let fixture: ComponentFixture<SuppliersCustomersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuppliersCustomersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuppliersCustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
