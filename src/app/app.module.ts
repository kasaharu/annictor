import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { MatButtonModule } from '@angular/material/button';

import { AnimeService } from './services/anime.service';

import { AppComponent } from './app.component';
import { AnimeListComponent } from './componets/anime-list/anime-list.component';
import { SeasonComponent } from './componets/season/season.component';

@NgModule({
  declarations: [
    AppComponent,
    AnimeListComponent,
    SeasonComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatButtonModule,
  ],
  providers: [AnimeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
