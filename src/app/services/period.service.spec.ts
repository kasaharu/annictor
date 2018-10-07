import { TestBed, inject } from '@angular/core/testing';

import { PeriodService } from './period.service';

describe('PeriodService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PeriodService],
    });
  });

  it('should be created', inject([PeriodService], (service: PeriodService) => {
    expect(service).toBeTruthy();
  }));

  it('call getThisPeriod() method', inject([PeriodService], (service: PeriodService) => {
    const baseTime = new Date(2020, 4, 1);
    jasmine.clock().mockDate(baseTime);

    const thisPeriod = service.getThisPeriod();
    expect(thisPeriod).toEqual('2020-spring');
  }));
});
