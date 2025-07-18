import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-series',
  imports: [DatePipe],
  templateUrl: './series.html',
  styleUrl: './series.css'
})
export class SeriesComponent {

    series: any[] = []
    page: number = 1
    total_pages: number = 1

    constructor(private http: HttpClient, private router: Router) {}

    ngOnInit() {
      this.cargarSeries();
    }

    cargarSeries() {
      this.http.get<any>(`http://localhost:3000/api/series?page=${this.page}`)
      .subscribe({
        next: res => {
          this.series = res.results;
          this.total_pages = res.total_pages;
        },
        error: err => {
          console.error('Error al cargar las series:', err);
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
        this.cargarSeries();
      }
    }

    verDetalle(id: any) {
      this.router.navigate(['/serie', id]);
    }
}

