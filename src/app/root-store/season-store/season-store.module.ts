import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';

import { seasonReducer } from './reducers';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('season', seasonReducer),
  ],
  declarations: [],
})
export class SeasonStoreModule { }
