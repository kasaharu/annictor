import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { Store } from '@ngrx/store';

import { WorksComponent } from './works.component';

import { ActivatedRouteStub } from '../../testing/activated-route-stub';
import { RootStoreModule, RootStoreState, AnimeStoreActions, SeasonStoreActions } from '../../root-store';
import { AnimeListComponent } from '../../components/anime-list/anime-list.component';
import { AnimeService } from '../../services/anime.service';

describe('WorksComponent', () => {
  let component: WorksComponent;
  let fixture: ComponentFixture<WorksComponent>;
  let store$: Store<RootStoreState.State>;
  let router: Router;
  const activatedRoute = new ActivatedRouteStub({ seasonId: '' });

  beforeEach(async(() => {
    const routerSpy = jasmine.createSpyObj('Router', ['navigate']);
    TestBed.configureTestingModule({
      declarations: [WorksComponent, AnimeListComponent],
      imports: [HttpClientModule, RootStoreModule],
      providers: [
        AnimeService,
        { provide: Router, useValue: routerSpy },
        { provide: ActivatedRoute, useValue: activatedRoute },
      ],
      schemas: [NO_ERRORS_SCHEMA],
    })
    .compileComponents();

    router = TestBed.get(Router);
    store$ = TestBed.get(Store);
    spyOn(store$, 'dispatch').and.callThrough();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('URL path に seasonId を持っている場合', () => {
    activatedRoute.setParamMap({ seasonId: '2020-spring' });
    expect(component).toBeTruthy();
  });

  it('call fetchAnimeList() method', () => {
    const seasonId = '2020-spring';
    const action = new AnimeStoreActions.FetchRequstAction(seasonId);
    component.fetchAnimeList(seasonId);

    expect(store$.dispatch).toHaveBeenCalledWith(action);
  });

  it('call saveSeason() method', () => {
    const seasonId = '2020-spring';
    const action = new SeasonStoreActions.SaveRequstAction(seasonId);
    component.saveSeason(seasonId);

    expect(store$.dispatch).toHaveBeenCalledWith(action);
  });

  it('call goToPrevSeason() method', () => {
    activatedRoute.setParamMap({ seasonId: '2020-spring' });
    component.goToPrevSeason();
    expect(router.navigate).toHaveBeenCalledWith(['/works', '2020-winter']);
  });

  it('call goToNextSeason() method', () => {
    activatedRoute.setParamMap({ seasonId: '2020-spring' });
    component.goToNextSeason();
    expect(router.navigate).toHaveBeenCalledWith(['/works', '2020-summer']);
  });
});
