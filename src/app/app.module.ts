import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';

import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';

import { environment } from '../environments/environment';

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
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatSelectModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [AnimeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
