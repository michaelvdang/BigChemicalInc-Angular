import { TestBed } from '@angular/core/testing';

import { SensorActivationsService } from './sensor-activations.service';

describe('SensorActivationsService', () => {
  let service: SensorActivationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SensorActivationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
