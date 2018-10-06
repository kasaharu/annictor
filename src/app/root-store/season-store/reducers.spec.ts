import { FetchRequstAction, FetchSuccessAction } from './actions';
import { seasonReducer } from './reducers';
import { State } from './state';

describe('seasonReducer', () => {
  const testState: State = { season: { id: '' } };

  it('should fetch request', () => {
    const seasonId = '2020-spring';
    expect(seasonReducer(testState, new FetchRequstAction(seasonId))).toEqual(testState);
  });

  it('should fetch success', () => {
    const seasonId = '2020-spring';
    const expectedSeason = { id: '2020-spring' };
    const expectedState = { season: { id: '2020-spring' } };
    expect(seasonReducer(testState, new FetchSuccessAction(expectedSeason))).toEqual(expectedState);
  });
});
