import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movie } from '../interface/interface';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class Movies {
  
  private apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }

  getPopularMovies(page: number = 1) {
  return this.http.get<any>(`${this.apiUrl}/api/peliculas?page=${page}`);
}
  getMovieDetails(movieId: number) {
    return this.http.get<Movie>(`${this.apiUrl}/api/peliculas/${movieId}`);
  }

  getMovieCredits(id: number) {
    return this.http.get<{ director: string, cast: any[] }>(`${this.apiUrl}/api/peliculas/${id}/credits`);
  }
}
