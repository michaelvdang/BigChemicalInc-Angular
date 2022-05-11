import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeAccessesComponent } from './employee-accesses.component';

describe('EmployeeAccessesComponent', () => {
  let component: EmployeeAccessesComponent;
  let fixture: ComponentFixture<EmployeeAccessesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeAccessesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeAccessesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
