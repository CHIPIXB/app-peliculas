import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BusquedaService } from '../../services/busqueda';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-search',
  imports: [DatePipe],
  templateUrl: './search.html',
  styleUrl: './search.css'
})
export class Search {

  resultados: any[] = [];
  query: string = '';

  constructor(private route: ActivatedRoute, private busquedaService: BusquedaService, private router: Router) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.query = params['q'] || '';
      if (this.query) {
        this.buscar(this.query);
      }
    });
  }

  buscar(texto: string) {
    this.busquedaService.buscarTodo(texto).subscribe(data => {
      this.resultados = data;
    });
  }

    verDetalle(id: number, tipo: 'pelicula' | 'serie') {
    if (tipo === 'pelicula') {
      this.router.navigate(['/movie', id]);
    } else {
      this.router.navigate(['/serie', id]);
    }
  }
}
