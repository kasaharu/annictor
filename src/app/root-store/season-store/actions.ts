import { Action } from '@ngrx/store';
import { Season } from '../../core/models';

export enum ActionTypes {
  FETCH_REQUEST = '[Season] Fetch Request',
  FETCH_SUCCESS = '[Season] Fetch Success',
}

export class FetchRequstAction implements Action {
  readonly type = ActionTypes.FETCH_REQUEST;
  constructor(public payload: string) {}
}

export class FetchSuccessAction implements Action {
  readonly type = ActionTypes.FETCH_SUCCESS;
  constructor(public payload: Season) {}
}

export type ActionsUnion = FetchRequstAction | FetchSuccessAction;
