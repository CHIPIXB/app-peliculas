import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BusquedaService {
    private API_URL = 'http://localhost:3000/api/buscar';

    constructor(private http: HttpClient) {}

    buscarTodo(query: string): Observable<any[]> {
    return this.http.get<any[]>(`http://localhost:3000/api/buscar?query=${query}`);
  }
}

