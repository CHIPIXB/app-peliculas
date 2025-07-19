import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [DatePipe],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  movies: any[] = [];
  series: any[] = [];

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
    this.getPeliculas();
    this.getSeries();
  }

  getPeliculas() {
    this.http.get<any>('http://localhost:3000/api/peliculas?page=1')
      .subscribe({
        next: res => this.movies = res.results.slice(0, 20),
        error: err => console.error('Error al cargar películas:', err)
      });
  }

  getSeries() {
    this.http.get<any>('http://localhost:3000/api/series?page=1')
      .subscribe({
        next: res => this.series = res.results.slice(0, 20),
        error: err => console.error('Error al cargar series:', err)
      });
  }

  verMasPeliculas() {
    this.router.navigate(['/peliculas']);
  }

  verMasSeries() {
    this.router.navigate(['/series']);
  }

  verDetalle(id: number, tipo: 'pelicula' | 'serie') {
    if (tipo === 'pelicula') {
      this.router.navigate(['/movie', id]);
    } else {
      this.router.navigate(['/serie', id]);
    }
  }
}
