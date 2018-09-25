import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { animeReducer } from './reducers';
import { AnimeStoreEffects } from './effects';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('animeList', animeReducer),
    EffectsModule.forFeature([AnimeStoreEffects]),
  ],
  declarations: [],
  providers: [AnimeStoreEffects],
})
export class AnimeStoreModule { }
