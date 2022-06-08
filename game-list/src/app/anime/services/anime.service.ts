import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Anime } from './../models/anime.model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'any'
})
export class AnimeService {
  private baseUrl: string = 'http://localhost:3000/';

  constructor(private http: HttpClient, private router: Router) { }

  getAnime(): Promise<Anime[] | undefined> {
    return this.http.get<Anime[]>(this.baseUrl + 'anime').toPromise();
  }

  getAnimeById(id: NonNullable<Anime['id']> | string ): Promise<Anime | undefined> {
    return this.http.get<Anime>(this.baseUrl + 'anime/' + id).toPromise().catch(() => Promise.reject('Error in getAnimeById method'));
  }
}

