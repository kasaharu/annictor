import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';

import { PeriodService } from '../../services/period.service';

@Component({
  selector: 'app-season',
  templateUrl: './season.component.html',
  styleUrls: ['./season.component.scss'],
})
export class SeasonComponent implements OnChanges {
  @Input()
  seasonId: string;
  @Output()
  goToPrevSeason = new EventEmitter();
  @Output()
  goToNextSeason = new EventEmitter();

  seasonText: string;

  constructor(private periodService: PeriodService) {}

  ngOnChanges() {
    this.seasonText = this.periodService.convertToDisplaySeason(this.seasonId);
  }

  clickPrevButton() {
    this.goToPrevSeason.emit();
  }

  clickNextButton() {
    this.goToNextSeason.emit();
  }
}
