import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { mergeMap, map } from 'rxjs/operators';

import * as AnimeStoreActions from './actions';

import { AnimeService } from '../../services/anime.service';

@Injectable()
export class AnimeStoreEffects {
  constructor(
    private actions$: Actions,
    private animeService: AnimeService,
  ) {}

  @Effect()
  fetch$: Observable<Action> = this.actions$.pipe(
    ofType<AnimeStoreActions.FetchRequstAction>(AnimeStoreActions.ActionTypes.FETCH_REQUEST),
    mergeMap(action =>
      this.animeService.fetchAnimeList(action.payload).pipe(
        map(result => new AnimeStoreActions.FetchSuccessAction(result)),
      ),
    ),
  );
}
