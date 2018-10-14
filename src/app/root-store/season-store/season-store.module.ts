import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { seasonReducer } from './reducers';
import { SeasonStoreEffects } from './effects';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('season', seasonReducer),
    EffectsModule.forFeature([SeasonStoreEffects]),
  ],
  declarations: [],
})
export class SeasonStoreModule { }
