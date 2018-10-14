import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

import {
  RootStoreState,
  AnimeStoreActions,
  AnimeStoreSelectors,
  SeasonStoreActions,
  SeasonStoreSelectors,
} from '../../root-store';
import { AnimeList, Season } from '../../core/models';

import { PeriodService } from '../../services/period.service';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss'],
})
export class WorksComponent implements OnInit {
  animeList$: Observable<AnimeList>;
  season$: Observable<Season>;

  constructor(
    private store$: Store<RootStoreState.State>,
    private route: ActivatedRoute,
    private router: Router,
    private periodService: PeriodService,
  ) { }

  ngOnInit() {
    this.animeList$ = this.store$.pipe(select(AnimeStoreSelectors.selectAnimeList));
    this.season$ = this.store$.pipe(select(SeasonStoreSelectors.selectSeason));

    this.route.paramMap.subscribe((params) => {
      let seasonId = params.get('seasonId');
      if (!seasonId) {
        seasonId = this.periodService.getThisPeriod();
        this.router.navigate(['/works', seasonId]);
      }
      this.fetchAnimeList(seasonId);
      this.saveSeason(seasonId);
    });
  }

  fetchAnimeList(seasonId: string) {
    this.store$.dispatch(new AnimeStoreActions.FetchRequstAction(seasonId));
  }

  saveSeason(seasonId: string) {
    this.store$.dispatch(new SeasonStoreActions.SaveRequstAction(seasonId));
  }

  goToPrevSeason() {
    this.season$.pipe(take(1)).subscribe(season => {
      const prevSeasonId = this.periodService.getPreSeasonId(season.id);
      this.router.navigate(['/works', prevSeasonId]);
    });
  }

  goToNextSeason() {
    this.season$.pipe(take(1)).subscribe(season => {
      const nextSeasonId = this.periodService.getNextSeasonId(season.id);
      this.router.navigate(['/works', nextSeasonId]);
    });
  }
}
