import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import type { ParamMap } from '@angular/router';
import { map, switchMap } from 'rxjs';


import { Anime } from '../../models/anime.model';
import { AnimeService } from '../../services/anime.service';

@Component({
  templateUrl: './anime-details.component.html',
  styleUrls: ['./anime-details.component.scss']
})
export class AnimeDetailsComponent implements OnInit {
  anime!: Anime;

  constructor(private animeService: AnimeService, private router: Router, private route: ActivatedRoute) { }

  async ngOnInit(): Promise<void> {
    const observer = {
      next: (anime: Anime) => (this.anime = { ...anime }),
      error: (err: any) => {
        const link = ['/PathNotFound'];
        this.router.navigate(link);
      }
    };

    this.route.paramMap
      .pipe(
        switchMap((params: ParamMap) =>
          this.animeService.getAnimeById(params.get('animeID')!)
        ),
        map(el => el ? el : {} as Anime)
      )
      .subscribe(observer);
  }
}
