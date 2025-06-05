import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

  peliculas: any[] = []

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any>('http://localhost:3000/api/peliculas')
    .subscribe({
      next: res => {
        this.peliculas = res.results;
      },
      error: err => {
        console.error('Error al cargar las peliculas:', err);
      }
    })
  }
}
