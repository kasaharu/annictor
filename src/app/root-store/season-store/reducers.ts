import { ActionTypes, ActionsUnion } from './actions';
import { State, initialState } from './state';

export function seasonReducer(state: State = initialState, action: ActionsUnion): State {
  switch (action.type) {
    case ActionTypes.FETCH_REQUEST:
      return state;
    case ActionTypes.FETCH_SUCCESS:
      return { season: action.payload };
    case ActionTypes.SAVE_REQUEST:
      return state;
    case ActionTypes.SAVE_SUCCESS:
      return { season: action.payload };
    default:
      return state;
  }
}
