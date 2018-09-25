import { Component, OnInit, Input } from '@angular/core';

import { AnimeList } from '../../core/models';

@Component({
  selector: 'app-anime-list',
  templateUrl: './anime-list.component.html',
  styleUrls: ['./anime-list.component.scss'],
})
export class AnimeListComponent implements OnInit {
  @Input() animeList: AnimeList;

  constructor() {}

  ngOnInit() {
  }
}
