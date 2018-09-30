import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { AnimeService } from './anime.service';

describe('AnimeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AnimeService],
    });
  });

  it('should be created', inject([AnimeService], (service: AnimeService) => {
    expect(service).toBeTruthy();
  }));
});
