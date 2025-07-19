import { Component } from '@angular/core';
import { Serie } from '../../interface/interface';
import { HttpClient } from '@angular/common/http';
import { SeriesService } from '../../services/series';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-serie-detail',
  imports: [DatePipe],
  templateUrl: './serie-detail.html',
  styleUrl: './serie-detail.css'
})
export class SerieDetail {

  serie: Serie | null = null;
  director: string | null = null;
  cast: any[] = [];

  constructor(private http: HttpClient, private serieService: SeriesService) {}

  ngOnInit() {
    const serieId = this.getSerieIdFromUrl();
    this.getSerieDetails(serieId);
    this.getSerieCredits(serieId);
  }

  getSerieDetails(serieId: number) {
    this.serieService.getSerieDetails(serieId).subscribe({
      next: (data) => {
        this.serie = data;
      },
      error: (error) => {
        console.error('Error al cargar los detalles de la serie:', error);
      }
    });
  }

  getSerieIdFromUrl() {
    const url = window.location.href;
    const parts = url.split('/');
    const serieId = parseInt(parts[parts.length - 1], 10);
    return isNaN(serieId) ? 0 : serieId;
  }

  getSerieCredits(serieId: number) {
  this.serieService.getSerieCredits(serieId).subscribe({
    next: (data) => {
      this.director = data.director;
      this.cast = data.cast;
    },
    error: (error) => {
      console.error('Error al cargar los créditos de la serie:', error);
    }
  });
}
}
