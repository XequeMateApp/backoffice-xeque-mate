import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloseSupplierCustomersClientComponent } from './close-supplier-customers-client.component';

describe('CloseSupplierCustomersClientComponent', () => {
  let component: CloseSupplierCustomersClientComponent;
  let fixture: ComponentFixture<CloseSupplierCustomersClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CloseSupplierCustomersClientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CloseSupplierCustomersClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
