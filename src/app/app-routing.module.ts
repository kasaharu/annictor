import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AnimeListComponent } from './components/anime-list/anime-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/anime-list', pathMatch: 'full' },
  { path: 'anime-list', component: AnimeListComponent },
  { path: 'anime-list/:seasonId', component: AnimeListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
