import { TestBed } from '@angular/core/testing';

import { EmployeeAccessRightsService } from './employee-access-rights.service';

describe('EmployeeAccessRightsService', () => {
  let service: EmployeeAccessRightsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeAccessRightsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
