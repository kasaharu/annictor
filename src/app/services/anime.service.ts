import { Injectable } from '@angular/core';

@Injectable()
export class AnimeService {

  constructor() { }

  fetchAnimeList(): void {
    console.log('Call AnimeService:fetchAnimeList()');
  }
}
