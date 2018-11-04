import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';

import { AnimeDetailComponent } from './anime-detail.component';

import { ActivatedRouteStub } from '../../testing/activated-route-stub';

describe('AnimeDetailComponent', () => {
  let component: AnimeDetailComponent;
  let fixture: ComponentFixture<AnimeDetailComponent>;
  let router: Router;
  const activatedRoute = new ActivatedRouteStub({ workId: '' });

  beforeEach(async(() => {
    const routerSpy = jasmine.createSpyObj('Router', ['navigate']);
    TestBed.configureTestingModule({
      declarations: [AnimeDetailComponent],
      providers: [
        { provide: Router, useValue: routerSpy },
        { provide: ActivatedRoute, useValue: activatedRoute },
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    router = TestBed.get(Router);
    fixture = TestBed.createComponent(AnimeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('不正なパラメータが与えられた場合 / にリダイレクト', () => {
    activatedRoute.setParamMap({ workId: 'invalid-work-id' });

    const spy = router.navigate as jasmine.Spy;
    const navigationArgs = spy.calls.first().args[0];
    expect(navigationArgs).toEqual(['/']);
  });

  describe('call invalidWorkId() method', () => {
    it('valid param', () => {
      expect(component.invalidWorkId('2020')).toBeFalsy();
    });

    it('invalid param', () => {
      expect(component.invalidWorkId('2020-spring')).toBeTruthy();
    });
  });
});
