import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { EffectsMetadata, getEffectsMetadata } from '@ngrx/effects';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';
import { hot, cold } from 'jasmine-marbles';

import { SeasonStoreEffects } from './effects';
import * as SeasonStoreActions from './actions';

describe('SeasonStoreEffects', () => {
  let effects: SeasonStoreEffects;
  let actions: Observable<any>;
  let metadata: EffectsMetadata<SeasonStoreEffects>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [
        SeasonStoreEffects,
        provideMockActions(() => actions),
      ],
    });

    effects = TestBed.get(SeasonStoreEffects);
    metadata = getEffectsMetadata(effects);
  });

  it('exec save$ effect ', () => {
    const season = { id: '2020-spring' };

    const action = new SeasonStoreActions.SaveRequstAction('2020-spring');
    const completion = new SeasonStoreActions.SaveSuccessAction(season);

    // Refer to 'Writing Marble Tests' for details on '--a-' syntax
    actions = hot('--a-', { a: action });
    const expected = cold('--b', { b: completion });

    expect(effects.save$).toBeObservable(expected);
  });

  it('check save$ metadata', () => {
    expect(metadata.save$).toEqual({ dispatch: true });
  });
});
