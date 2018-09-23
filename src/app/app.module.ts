import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';

import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';

import { environment } from '../environments/environment';

import { AnimeService } from './services/anime.service';
import { PeriodService } from './services/period.service';

import { AppComponent } from './app.component';
import { AnimeListComponent } from './components/anime-list/anime-list.component';
import { SeasonComponent } from './components/season/season.component';
import { AppRoutingModule } from './/app-routing.module';
import { WorksComponent } from './containers/works/works.component';

@NgModule({
  declarations: [
    AppComponent,
    AnimeListComponent,
    SeasonComponent,
    WorksComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatSelectModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    AppRoutingModule,
  ],
  providers: [AnimeService, PeriodService],
  bootstrap: [AppComponent],
})
export class AppModule { }
