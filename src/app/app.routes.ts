import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { MovieDetail } from './pages/movie-detail/movie-detail';
import { Peliculas } from './pages/peliculas/peliculas';
import { SeriesComponent } from './pages/series/series';
import { SerieDetail } from './pages/serie-detail/serie-detail';

export const routes: Routes = [
    {path: '', pathMatch: 'full', component: Home},
    {path: 'peliculas', component: Peliculas},
    {path: 'series', component: SeriesComponent},
    {path: 'movie/:id', component: MovieDetail},
    {path: 'serie/:id', component: SerieDetail},
    {path: '**', redirectTo: '', pathMatch: 'full'}
];
