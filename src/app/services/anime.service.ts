import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AnimeService {
  ANNICT_API_PATH = 'https://api.annict.com/v1/works';
  ANNICT_API_KEY = '';

  constructor(private http: HttpClient) { }

  fetchAnimeList(): any {
    const filterSeason = '2018-spring';

    const targetUrl = `${this.ANNICT_API_PATH}?access_token=${this.ANNICT_API_KEY}&filter_season=${filterSeason}`;
    return this.http.get(targetUrl);
  }
}
