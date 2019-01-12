import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AnimeList, AnimeDetail } from '../core/models';
import { environment } from '../../environments/environment';

@Injectable()
export class AnimeService {
  ANNICT_API_PATH = 'https://api.annict.com/v1/works';
  ANNICT_API_KEY = environment.annictApiKey;

  constructor(private http: HttpClient) { }

  fetchAnimeList(filterSeason: string): Observable<AnimeList> {
    const targetUrl = `${this.ANNICT_API_PATH}?access_token=${this.ANNICT_API_KEY}&filter_season=${filterSeason}&sort_watchers_count=desc`;
    return this.http.get<AnimeList>(targetUrl);
  }

  fetchAnimeDetail(workId: number): Observable<AnimeDetail> {
    const targetUrl = `https://api.annict.com/v1/episodes?access_token=${this.ANNICT_API_KEY}&filter_work_id=${workId}`;
    return this.http.get<AnimeDetail>(targetUrl);
  }
}
