import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [DatePipe],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

  movies: any[] = []
  page: number = 1
  total_pages: number = 1

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.cargarPeliculas();
  }

  cargarPeliculas() {
    this.http.get<any>(`http://localhost:3000/api/peliculas?page=${this.page}`)
    .subscribe({
      next: res => {
        this.movies = res.results;
        this.total_pages = res.total_pages;
      },
      error: err => {
        console.error('Error al cargar las peliculas:', err);
      }
    })
  }

  get pages(): number[] {
    if (this.page === 1) {
      return [1, 2, 3];
    } else if (this.page === 2) {
      return [1, 2, 3];
    } else {
      return [this.page - 1, this.page, this.page + 1];
    }
  }

  cambiarPagina(newPage: number): void {
    if (newPage >= 1) {
      this.page = newPage ;
      this.cargarPeliculas();
    }
  }

  verDetalle(id: any) {
    console.log('Ver detalle de la película:', id);
  }
}
