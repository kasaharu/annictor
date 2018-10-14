import { FetchRequstAction, FetchSuccessAction } from './actions';
import { animeReducer } from './reducers';
import { State } from './state';

describe('animeReducer', () => {
  const testState: State = { animeList: { works: [], next_page: 0 } };

  it('should fetch request', () => {
    const seasonId = '2020-spring';
    expect(animeReducer(testState, new FetchRequstAction(seasonId))).toEqual(testState);
  });

  it('should fetch success', () => {
    const expectedAnimeList = { works: [], next_page: 1 };
    const expectedState = { animeList: expectedAnimeList };
    expect(animeReducer(testState, new FetchSuccessAction(expectedAnimeList))).toEqual(expectedState);
  });
});
