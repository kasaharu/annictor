import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimeListComponent } from './anime-list.component';
import { AnimeService } from '../../services/anime.service';

describe('AnimeListComponent', () => {
  let component: AnimeListComponent;
  let fixture: ComponentFixture<AnimeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimeListComponent ],
      providers: [AnimeService],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
