import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { MovieDetail } from './pages/movie-detail/movie-detail';
import { Search } from './pages/search/search';

export const routes: Routes = [
    {path: '', pathMatch: 'full', component: Home},
    {path: 'movie/:id', component: MovieDetail},
    {path: 'search', component: Search},
    {path: '**', redirectTo: '', pathMatch: 'full'}
];
