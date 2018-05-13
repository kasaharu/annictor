import { Component, OnInit, Input } from '@angular/core';

import { AnimeService } from '../../services/anime.service';

import { Annict } from '../../models/annict';

@Component({
  selector: 'app-anime-list',
  templateUrl: './anime-list.component.html',
  styleUrls: ['./anime-list.component.scss']
})
export class AnimeListComponent implements OnInit {
  @Input() seasonId: string;
  animeList: Annict.AnimeDetail[];

  constructor(private animeService: AnimeService) { }

  ngOnInit() {
    this.fetchAnimeList();
  }

  fetchAnimeList(): void {
    const targetSeason = this.seasonId;
    this.animeService.fetchAnimeList(targetSeason)
      .subscribe(list => this.animeList = list.works);
  }

  getTargetSeasonId(seasonId: string): void {
    this.seasonId = seasonId;
    this.fetchAnimeList();
  }
}
