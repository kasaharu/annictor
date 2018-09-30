import { AnimeStoreState } from './anime-store';
import { SeasonStoreState } from './season-store';

export interface State {
  animeList: AnimeStoreState.State;
  season: SeasonStoreState.State;
}
