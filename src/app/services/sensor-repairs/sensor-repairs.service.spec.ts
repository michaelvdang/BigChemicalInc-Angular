import { TestBed } from '@angular/core/testing';

import { SensorRepairsService } from './sensor-repairs.service';

describe('SensorRepairsService', () => {
  let service: SensorRepairsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SensorRepairsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
