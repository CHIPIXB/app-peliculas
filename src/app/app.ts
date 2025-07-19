import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./components/navbar/navbar";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'app-peliculas';
  scrollToTop(): void {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}
}
