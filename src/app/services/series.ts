import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Serie } from '../interface/interface';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {

  private apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }

  getPopularSeries(page: number = 1) {
  return this.http.get<any>(`${this.apiUrl}/api/series?page=${page}`);
}

  getSerieDetails(seriesId: number) {
    return this.http.get<Serie>(`${this.apiUrl}/api/series/${seriesId}`);
  }

  getSerieCredits(id: number) {
    return this.http.get<{ director: string, cast: any[] }>(`${this.apiUrl}/api/series/${id}/credits`);
  }
}
