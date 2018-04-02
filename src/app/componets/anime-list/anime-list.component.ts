import { Component, OnInit } from '@angular/core';

import { AnimeService } from '../../services/anime.service';

@Component({
  selector: 'app-anime-list',
  templateUrl: './anime-list.component.html',
  styleUrls: ['./anime-list.component.scss']
})
export class AnimeListComponent implements OnInit {
  animeList = []

  constructor(private animeService: AnimeService) { }

  ngOnInit() {
    this.fetchAnimeList();
  }

  fetchAnimeList(): void {
    this.animeService.fetchAnimeList();
  }
}
