import { TestBed } from '@angular/core/testing';

import { EmployeeTrackingService } from './employee-tracking.service';

describe('EmployeeTrackingService', () => {
  let service: EmployeeTrackingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeTrackingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
