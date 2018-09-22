import { ActionTypes, ActionsUnion } from './actions';
import { State, initialState } from './state';

export function animeReducer(state: State = initialState, action: ActionsUnion): State {
  switch (action.type) {
    case ActionTypes.FETCH_REQUEST:
      return state;
    case ActionTypes.FETCH_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}
