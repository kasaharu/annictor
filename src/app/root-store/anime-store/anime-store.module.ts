import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';

import { animeReducer } from './reducers';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('animeList', animeReducer),
  ],
  declarations: [],
})
export class AnimeStoreModule { }
