import { selectAnimeList } from './selectors';
import { State } from './state';

describe('AnimeStoreSelector', () => {
  it('exec selectAnimeList', () => {
    const testAnimeListState: State = { animeList: { works: [], next_page: 1 } };
    expect(selectAnimeList.projector(testAnimeListState).works).toEqual([]);
  });
});
