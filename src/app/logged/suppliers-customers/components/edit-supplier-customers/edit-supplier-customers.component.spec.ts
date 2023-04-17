import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSupplierCustomersComponent } from './edit-supplier-customers.component';

describe('EditSupplierCustomersComponent', () => {
  let component: EditSupplierCustomersComponent;
  let fixture: ComponentFixture<EditSupplierCustomersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditSupplierCustomersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditSupplierCustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
