import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

  ngOnInit() {
    // this.cargarSeries();
  }

//   cargarSeries() {
//   this.http.get<any>(`http://localhost:3000/api/series?page=${this.page}`)
//     .subscribe({
//       next: res => this.series = res.results,
//       error: err => console.error('Error al cargar las series:', err)
//     });
// }


}
