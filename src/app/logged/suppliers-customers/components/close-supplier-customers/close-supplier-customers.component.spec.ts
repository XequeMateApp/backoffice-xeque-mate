import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloseSupplierCustomersComponent } from './close-supplier-customers.component';

describe('CloseSupplierCustomersComponent', () => {
  let component: CloseSupplierCustomersComponent;
  let fixture: ComponentFixture<CloseSupplierCustomersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CloseSupplierCustomersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CloseSupplierCustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
