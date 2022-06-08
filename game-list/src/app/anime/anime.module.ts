import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AnimeRoutingModule } from './anime-routing.module';
import { AnimeListComponent, AnimeComponent, AnimeDetailsComponent } from './components';


@NgModule({
  declarations: [
    AnimeListComponent,
    AnimeComponent,
    AnimeDetailsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    AnimeRoutingModule
  ]
})
export class AnimeModule { }
