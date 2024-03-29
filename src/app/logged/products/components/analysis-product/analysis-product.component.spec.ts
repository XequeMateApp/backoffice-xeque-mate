import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalysisProductComponent } from './analysis-product.component';

describe('AnalysisProductComponent', () => {
  let component: AnalysisProductComponent;
  let fixture: ComponentFixture<AnalysisProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnalysisProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnalysisProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
