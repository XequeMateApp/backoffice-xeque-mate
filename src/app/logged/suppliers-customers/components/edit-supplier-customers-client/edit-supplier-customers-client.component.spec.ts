import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSupplierCustomersClientComponent } from './edit-supplier-customers-client.component';

describe('EditSupplierCustomersClientComponent', () => {
  let component: EditSupplierCustomersClientComponent;
  let fixture: ComponentFixture<EditSupplierCustomersClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditSupplierCustomersClientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditSupplierCustomersClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
