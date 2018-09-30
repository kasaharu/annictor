import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AnimeStoreModule } from './anime-store/anime-store.module';
import { SeasonStoreModule } from './season-store/season-store.module';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    AnimeStoreModule,
    SeasonStoreModule,
  ],
  declarations: [],
})
export class RootStoreModule { }
