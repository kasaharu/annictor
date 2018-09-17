import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AnimeService } from '../../services/anime.service';
import { PeriodService } from '../../services/period.service';

import { Annict } from '../../models/annict';

@Component({
  selector: 'app-anime-list',
  templateUrl: './anime-list.component.html',
  styleUrls: ['./anime-list.component.scss'],
})
export class AnimeListComponent implements OnInit {
  seasonId: string;
  animeList: Annict.AnimeDetail[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private animeService: AnimeService,
    private periodService: PeriodService,
  ) { }

  ngOnInit() {
    this.seasonId = this.route.snapshot.paramMap.get('seasonId');
    if (!this.seasonId) {
      this.seasonId = this.periodService.getThisPeriod();
      this.router.navigate(['/anime-list', this.seasonId]);
    }
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
