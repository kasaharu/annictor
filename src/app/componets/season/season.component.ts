import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-season',
  templateUrl: './season.component.html',
  styleUrls: ['./season.component.scss']
})
export class SeasonComponent implements OnInit {
  selectedSeason: String;

  constructor() { }

  ngOnInit() {
    this.selectedSeason = '2018-spring';
  }

}
