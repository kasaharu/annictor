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

  it('call convertToDisplaySeason() method', inject([PeriodService], (service: PeriodService) => {
    const seasonId = '2020-spring';
    const expectedSeasonText = '2020年春';
    const displaySeasonText = service.convertToDisplaySeason(seasonId);

    expect(displaySeasonText).toEqual(expectedSeasonText);
  }));
});
