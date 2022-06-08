// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-anime-list',
//   templateUrl: './anime-list.component.html',
//   styleUrls: ['./anime-list.component.scss']
// })
// export class AnimeListComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }

import { Component } from '@angular/core';
import { AnimeService } from './../../services/anime.service';
import { Router } from '@angular/router';

import type { OnInit } from '@angular/core';
import type { Anime } from './../../models/anime.model';

@Component({
  templateUrl: './anime-list.component.html',
  styleUrls: ['./anime-list.component.scss']
})
export class AnimeListComponent implements OnInit {
  anime!: Anime[];

  constructor(private router: Router, private animeService: AnimeService) {}

  async ngOnInit(): Promise<void> {
    const response = await this.animeService.getAnime();
    this.anime = response ? response : [];
  }

  onAnimeClick(anime: Anime): void {
    const link = ['/anime', anime.id];
    this.router.navigate(link);
  }
}
