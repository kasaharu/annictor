import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-anime-list',
  templateUrl: './anime-list.component.html',
  styleUrls: ['./anime-list.component.scss']
})
export class AnimeListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.fetchAnimeList();
  }

  fetchAnimeList(): void {
    console.log('Call fetchAnimeList()');
  }
}
