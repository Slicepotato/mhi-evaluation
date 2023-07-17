import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleEmployeeDataComponent } from './single-employee-data.component';

describe('SingleEmployeeDataComponent', () => {
  let component: SingleEmployeeDataComponent;
  let fixture: ComponentFixture<SingleEmployeeDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SingleEmployeeDataComponent]
    });
    fixture = TestBed.createComponent(SingleEmployeeDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
