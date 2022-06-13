import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AnimeListComponent, AnimeDetailsComponent } from './components';

const routes: Routes = [
  {
    path: 'home',
    component: AnimeListComponent
  },
  {
    path: 'anime/:animeID',
    component: AnimeDetailsComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnimeRoutingModule { }
