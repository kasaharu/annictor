import { createFeatureSelector, createSelector } from '@ngrx/store';

import { State } from './state';

const getSeason = (state: State) => state.season;

export const selectSeasonState = createFeatureSelector<State>('season');
export const selectSeason = createSelector(selectSeasonState, getSeason);
