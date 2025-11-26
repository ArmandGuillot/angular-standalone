import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root', // la balise à utiliser pour ce composant
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  title = 'angular-standalone';
}