import { createFeatureSelector, createSelector } from '@ngrx/store';

import { State } from './state';

const getAnimeList = (state: State) => state.animeList;

export const selectAnimeListState = createFeatureSelector<State>('animeList');
export const selectAnimeList = createSelector(selectAnimeListState, getAnimeList);
