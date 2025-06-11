import { Component } from '@angular/core';
import { Movies } from '../../services/movies';
import { Movie } from '../../interface/interface';
import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-movie-detail',
  imports: [ DatePipe],
  templateUrl: './movie-detail.html',
  styleUrl: './movie-detail.css'
})
export class MovieDetail {

  movie: Movie | null = null;
  director: string | null = null;
  cast: any[] = [];

  constructor(private http: HttpClient, private movieService: Movies) {}

  ngOnInit() {
    const movieId = this.getMovieIdFromUrl();
    this.getMovieDetails(movieId);
    this.getMovieCredits(movieId);
  }

  getMovieDetails(movieId: number) {
    this.movieService.getMovieDetails(movieId).subscribe({
      next: (data) => {
        this.movie = data;
      },
      error: (error) => {
        console.error('Error al cargar los detalles de la película:', error);
      }
    });

  }

  getMovieIdFromUrl() {
    const url = window.location.href;
    const parts = url.split('/');
    const movieId = parseInt(parts[parts.length - 1], 10);
    return isNaN(movieId) ? 0 : movieId;  
  }

  getMovieCredits(movieId: number) {
  this.movieService.getMovieCredits(movieId).subscribe({
    next: (data) => {
      this.director = data.director;
      this.cast = data.cast;
    },
    error: (error) => {
      console.error('Error al cargar los créditos de la película:', error);
    }
  });
}

}
