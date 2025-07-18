import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [FormsModule, RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
  searchTerm: string = '';

    constructor(private router: Router) {}

    onSearch() {
      if (this.searchTerm.trim()) {
        this.router.navigate(['/search'], {
          queryParams: { q: this.searchTerm }
        });
        this.searchTerm = '';
      }
    }
}
