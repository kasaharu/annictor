import { AnimeList } from '../../core/models';

export interface State {
  animeList: AnimeList;
}

export const initialState: State = {
  animeList: {
    works: [],
    next_page: 0,
  },
};
