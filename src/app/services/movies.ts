import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movie } from '../interface/interface';

@Injectable({
  providedIn: 'root'
})
export class Movies {

  constructor(private http: HttpClient) { }

  getMovieDetails(movieId: number) {
    return this.http.get<Movie>(`http://localhost:3000/api/peliculas/${movieId}`);
  }

  getMovieCredits(id: number) {
    return this.http.get<{ director: string, cast: any[] }>(`http://localhost:3000/api/peliculas/${id}/credits`);
  }
}
