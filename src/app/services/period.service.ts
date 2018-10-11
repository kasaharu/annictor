import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PeriodService {

  constructor() { }

  private getThisSeason(thisMonth: number): string {
    if (4 <= thisMonth && thisMonth <= 6) { return 'spring'; }
    if (7 <= thisMonth && thisMonth <= 9) { return 'summer'; }
    if (10 <= thisMonth && thisMonth <= 12) { return 'autumn'; }

    return 'winter';
  }

  getThisPeriod(): string {
    const today = new Date();

    const thisYear = today.getFullYear();
    const thisSeason = this.getThisSeason(today.getMonth() + 1);

    return `${thisYear}-${thisSeason}`;
  }

  convertToDisplaySeason(seasonId: string) {
    const seasonMap = {
      spring: '春',
      summer: '夏',
      autumn: '秋',
      winter: '冬',
    };
    const [year, season] = seasonId.split('-');

    return `${year}年${seasonMap[season]}`;
  }

  getPreSeasonId(currentSeasonId: string): string {
    const [year, season] = currentSeasonId.split('-');
    const seasonList = ['winter', 'spring', 'summer', 'autumn'];
    const currentIndex = seasonList.indexOf(season);

    if (currentIndex === 0) {
      return `${+year - 1}-${seasonList[3]}`;
    }
    return `${year}-${seasonList[currentIndex - 1]}`;
  }
}
