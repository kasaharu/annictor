import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Annictor';
  selectedSeasonId = '2018-spring';

  getTargetSeasonId(seasonId: string): void {
    console.log(seasonId);
  }
}
