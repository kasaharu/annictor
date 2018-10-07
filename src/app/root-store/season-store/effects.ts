import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import * as SeasonStoreActions from './actions';

@Injectable()
export class SeasonStoreEffects {
  constructor(
    private actions$: Actions,
  ) {}

  @Effect()
  save$: Observable<Action> = this.actions$.pipe(
    ofType<SeasonStoreActions.SaveRequstAction>(SeasonStoreActions.ActionTypes.SAVE_REQUEST),
    map(({ payload }) => new SeasonStoreActions.SaveSuccessAction({ id: payload })),
  );
}
