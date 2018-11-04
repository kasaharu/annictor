import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AnimeDetailComponent } from './containers/anime-detail/anime-detail.component';
import { WorksComponent } from './containers/works/works.component';

const routes: Routes = [
  { path: '', redirectTo: '/works', pathMatch: 'full' },
  { path: 'works', component: WorksComponent },
  { path: 'works/:seasonId', component: WorksComponent },
  { path: 'anime-detail/:workId', component: AnimeDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
