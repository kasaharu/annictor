import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { ServiceWorkerModule } from '@angular/service-worker';

import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';

// import { environment } from '../environments/environment';

import { AnimeService } from './services/anime.service';
import { PeriodService } from './services/period.service';

import { AppComponent } from './app.component';
import { AnimeListComponent } from './components/anime-list/anime-list.component';
import { SeasonComponent } from './components/season/season.component';
import { AppRoutingModule } from './/app-routing.module';
import { RootStoreModule } from './root-store';
import { WorksComponent } from './containers/works/works.component';
import { AnimeDetailComponent } from './containers/anime-detail/anime-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    AnimeListComponent,
    SeasonComponent,
    WorksComponent,
    AnimeDetailComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatSelectModule,
    // TODO: Service Worker の設定を一度見直すため機能を OFF にする
    // ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    AppRoutingModule,
    RootStoreModule,
  ],
  providers: [AnimeService, PeriodService],
  bootstrap: [AppComponent],
})
export class AppModule { }
