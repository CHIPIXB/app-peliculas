import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BusquedaService {
    private apiUrl = environment.apiUrl;

    constructor(private http: HttpClient) {}

    buscarTodo(query: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/api/buscar?query=${query}`);
  }
}

