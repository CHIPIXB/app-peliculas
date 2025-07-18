import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Serie } from '../interface/interface';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {

  constructor(private http: HttpClient) { }

  getSerieDetails(seriesId: number) {
    return this.http.get<Serie>(`http://localhost:3000/api/series/${seriesId}`);
  }

  getSerieCredits(id: number) {
    return this.http.get<{ director: string, cast: any[] }>(`http://localhost:3000/api/series/${id}/credits`);
  }
}
