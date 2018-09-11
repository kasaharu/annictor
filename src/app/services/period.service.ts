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
}
