import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditUnityComponent } from './edit-unity.component';

describe('EditUnityComponent', () => {
  let component: EditUnityComponent;
  let fixture: ComponentFixture<EditUnityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditUnityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditUnityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
