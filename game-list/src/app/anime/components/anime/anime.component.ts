import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

import { Anime } from '../../models/anime.model';

@Component({
  selector: 'app-anime',
  templateUrl: './anime.component.html',
  styleUrls: ['./anime.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AnimeComponent implements OnInit {
  @Input() anime!: Anime;
  @Output() animeClicked = new EventEmitter<Anime>();

  constructor() { }

  ngOnInit(): void {
  }

  onAnimeClick(): void {
    this.animeClicked.emit(this.anime);
  }

}
