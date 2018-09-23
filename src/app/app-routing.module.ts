import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WorksComponent } from './containers/works/works.component';

const routes: Routes = [
  { path: '', redirectTo: '/anime-list', pathMatch: 'full' },
  { path: 'anime-list', component: WorksComponent },
  { path: 'anime-list/:seasonId', component: WorksComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
