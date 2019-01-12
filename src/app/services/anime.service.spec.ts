import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { AnimeService } from './anime.service';

describe('AnimeService', () => {
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AnimeService],
    });
    httpTestingController = TestBed.get(HttpTestingController);
  });

  it('should be created', inject([AnimeService], (service: AnimeService) => {
    expect(service).toBeTruthy();
  }));

  it('call fetchAnimeList() method', inject([AnimeService], (service: AnimeService) => {
    const filterSeason = '2018-autumn';
    const targetUrl =
      `${service.ANNICT_API_PATH}?access_token=${service.ANNICT_API_KEY}&filter_season=${filterSeason}&sort_watchers_count=desc`;

    service.fetchAnimeList(filterSeason).subscribe();
    const req = httpTestingController.expectOne(targetUrl);
    expect(req.request.method).toEqual('GET');
    httpTestingController.verify();
  }));

  it('call fetchAnimeDetail() method', inject([AnimeService], (service: AnimeService) => {
    const workId = 5550;
    const targetUrl =
      `https://api.annict.com/v1/episodes?access_token=${service.ANNICT_API_KEY}&filter_work_id=${workId}`;

    service.fetchAnimeDetail(workId).subscribe();
    const req = httpTestingController.expectOne(targetUrl);
    expect(req.request.method).toEqual('GET');
    httpTestingController.verify();
  }));
});
