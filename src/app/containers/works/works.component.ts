import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { RootStoreState, AnimeStoreActions, AnimeStoreSelectors } from '../../root-store';
import { AnimeList } from '../../core/models';

import { PeriodService } from '../../services/period.service';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss'],
})
export class WorksComponent implements OnInit {
  animeList$: Observable<AnimeList>;

  constructor(
    private store$: Store<RootStoreState.State>,
    private route: ActivatedRoute,
    private router: Router,
    private periodService: PeriodService,
  ) { }

  ngOnInit() {
    this.animeList$ = this.store$.pipe(select(AnimeStoreSelectors.selectAnimeList));

    this.route.paramMap.subscribe((params) => {
      let seasonId = params.get('seasonId');
      if (!seasonId) {
        seasonId = this.periodService.getThisPeriod();
        this.router.navigate(['/works', seasonId]);
      }
      this.fetchAnimeList(seasonId);
    });
  }

  fetchAnimeList(seasonId: string) {
    this.store$.dispatch(new AnimeStoreActions.FetchRequstAction(seasonId));
  }
}
