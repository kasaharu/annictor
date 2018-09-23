import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { RootStoreState, AnimeStoreSelectors } from '../../root-store';
import { AnimeList } from '../../core/models';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss'],
})
export class WorksComponent implements OnInit {
  animeList$: Observable<AnimeList>

  constructor(private store$: Store<RootStoreState.State>) { }

  ngOnInit() {
    this.animeList$ = this.store$.select(AnimeStoreSelectors.selectAnimeList);
  }
}
