import { Component } from '@angular/core';
import { Movies } from '../../services/movies';
import { Movie } from '../../interface/interface';
import { DatePipe, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-movie-detail',
  imports: [ DatePipe],
  templateUrl: './movie-detail.html',
  styleUrl: './movie-detail.css'
})
export class MovieDetail {

  movie: Movie | null = null;

  constructor(private movieService: Movies) {}

  ngOnInit() {
    this.getMovieDetails(this.getMovieIdFromUrl());
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

}
