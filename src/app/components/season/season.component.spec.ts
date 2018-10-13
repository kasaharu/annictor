import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSelectModule } from '@angular/material/select';

import { SeasonComponent } from './season.component';

describe('SeasonComponent', () => {
  let component: SeasonComponent;
  let fixture: ComponentFixture<SeasonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeasonComponent ],
      imports: [ MatSelectModule ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeasonComponent);
    component = fixture.componentInstance;
    component.seasonId = '2020-spring';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('call clickPrevButton() method', () => {
    spyOn(component.goToPrevSeason, 'emit');
    component.clickPrevButton();
    expect(component.goToPrevSeason.emit).toHaveBeenCalledWith();
  });

  it('call clickNextButton() method', () => {
    spyOn(component.goToNextSeason, 'emit');
    component.clickNextButton();
    expect(component.goToNextSeason.emit).toHaveBeenCalledWith();
  });
});
