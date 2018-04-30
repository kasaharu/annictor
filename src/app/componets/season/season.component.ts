import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-season',
  templateUrl: './season.component.html',
  styleUrls: ['./season.component.scss']
})
export class SeasonComponent implements OnInit {
  seasonList = [
    { value: '2018-winter' , displayName: '2018年冬' },
    { value: '2018-spring' , displayName: '2018年春' },
    { value: '2018-summer' , displayName: '2018年夏' },
  ];

  constructor() { }

  ngOnInit() {
    this.selectedSeason = '2018-spring';
  }

}
