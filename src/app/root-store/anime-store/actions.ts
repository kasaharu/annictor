import { Action } from '@ngrx/store';
import { AnimeList } from '../../core/models';

export enum ActionTypes {
  FETCH_REQUEST = '[Anime] Fetch Request',
  FETCH_SUCCESS = '[Anime] Fetch Success',
}

export class FetchRequstAction implements Action {
  readonly type = ActionTypes.FETCH_REQUEST;
}

export class FetchSuccessAction implements Action {
  readonly type = ActionTypes.FETCH_SUCCESS;
  constructor(public payload: AnimeList) {}
}

export type ActionsUnion = FetchRequstAction | FetchSuccessAction;
