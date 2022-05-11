import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeAccessRightsComponent } from './employee-access-rights.component';

describe('EmployeeAccessRightsComponent', () => {
  let component: EmployeeAccessRightsComponent;
  let fixture: ComponentFixture<EmployeeAccessRightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeAccessRightsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeAccessRightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
