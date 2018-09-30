import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { WorksComponent } from './works.component';

import { ActivatedRouteStub } from '../../testing/activated-route-stub';
import { RootStoreModule } from '../../root-store';
import { AnimeListComponent } from '../../components/anime-list/anime-list.component';
import { AnimeService } from '../../services/anime.service';

describe('WorksComponent', () => {
  let component: WorksComponent;
  let fixture: ComponentFixture<WorksComponent>;
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
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
