import { selectSeason } from './selectors';
import { State } from './state';

describe('SeasonStoreSelector', () => {
  it('exec selectSeason', () => {
    const testSeasonState: State = { season: { id: '2020-spring' } };
    expect(selectSeason.projector(testSeasonState).id).toEqual('2020-spring');
  });
});
