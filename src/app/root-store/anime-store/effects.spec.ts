import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { EffectsMetadata, getEffectsMetadata } from '@ngrx/effects';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of as observableOf } from 'rxjs';
import { hot, cold } from 'jasmine-marbles';

import { AnimeStoreEffects } from './effects';
import * as AnimeStoreActions from './actions';

import { AnimeService } from '../../services/anime.service';

describe('AnimeStoreEffects', () => {
  let effects: AnimeStoreEffects;
  let actions: Observable<any>;
  let metadata: EffectsMetadata<AnimeStoreEffects>;
  let animeService: AnimeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [
        AnimeStoreEffects,
        provideMockActions(() => actions),
        AnimeService,
      ],
    });

    effects = TestBed.get(AnimeStoreEffects);
    animeService = TestBed.get(AnimeService);
    metadata = getEffectsMetadata(effects);
  });

  it('exec fetch$ effect ', () => {
    const animeList = { works: [], next_page: 0 };

    const action = new AnimeStoreActions.FetchRequstAction('2020-spring');
    const completion = new AnimeStoreActions.FetchSuccessAction(animeList);

    // Refer to 'Writing Marble Tests' for details on '--a-' syntax
    actions = hot('--a-', { a: action });
    const expected = cold('--b', { b: completion });
    spyOn(animeService, 'fetchAnimeList').and.returnValue(observableOf(animeList));

    expect(effects.fetch$).toBeObservable(expected);
  });

  it('check fetch$ metadata', () => {
    expect(metadata.fetch$).toEqual({ dispatch: true });
  });
});
