import { TestBed, inject } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { AnimeService } from './anime.service';

describe('AnimeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [AnimeService]
    });
  });

  it('should be created', inject([AnimeService], (service: AnimeService) => {
    expect(service).toBeTruthy();
  }));
});
