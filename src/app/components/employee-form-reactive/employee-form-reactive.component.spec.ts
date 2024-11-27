import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeFormReactiveComponent } from './employee-form-reactive.component';

describe('EmployeeFormReactiveComponent', () => {
  let component: EmployeeFormReactiveComponent;
  let fixture: ComponentFixture<EmployeeFormReactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeFormReactiveComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmployeeFormReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
