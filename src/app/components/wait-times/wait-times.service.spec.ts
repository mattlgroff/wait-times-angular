import { TestBed } from '@angular/core/testing';

import { WaitTimesService } from './wait-times.service';

describe('WaitTimesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WaitTimesService = TestBed.get(WaitTimesService);
    expect(service).toBeTruthy();
  });
});
