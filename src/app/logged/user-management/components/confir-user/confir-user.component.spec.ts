import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirUserComponent } from './confir-user.component';

describe('ConfirUserComponent', () => {
  let component: ConfirUserComponent;
  let fixture: ComponentFixture<ConfirUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
