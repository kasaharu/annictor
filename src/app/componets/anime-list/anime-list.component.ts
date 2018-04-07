import { Component, OnInit } from '@angular/core';

import { AnimeService } from '../../services/anime.service';

import { Annict } from '../../models/annict';

@Component({
  selector: 'app-anime-list',
  templateUrl: './anime-list.component.html',
  styleUrls: ['./anime-list.component.scss']
})
export class AnimeListComponent implements OnInit {
  animeList: Annict.AnimeDetail[];

  constructor(private animeService: AnimeService) { }

  ngOnInit() {
    this.fetchAnimeList();
  }

  fetchAnimeList(): void {
    this.animeService.fetchAnimeList()
      .subscribe(list => this.animeList = list.works);
  }
}
