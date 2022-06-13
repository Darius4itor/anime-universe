import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatInputModule } from '@angular/material/input';

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
    MatIconModule,
    MatButtonToggleModule,
    MatInputModule,
    AnimeRoutingModule
  ]
})
export class AnimeModule { }
