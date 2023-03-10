import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidateSupplierComponent } from './validate-supplier.component';

describe('ValidateSupplierComponent', () => {
  let component: ValidateSupplierComponent;
  let fixture: ComponentFixture<ValidateSupplierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidateSupplierComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValidateSupplierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
