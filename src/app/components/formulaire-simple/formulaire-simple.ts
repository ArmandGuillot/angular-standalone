import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-formulaire-simple',
  imports: [],
  templateUrl: './formulaire-simple.html',
  styleUrl: './formulaire-simple.css',
})
export class FormulaireSimpleComponent {
  nom = 'Doe'
  updateNom(value: string) {
    this.nom = value
  }
  // updateNom(event: Event) {
  //   this.nom = (event.target as HTMLInputElement).value
  // }
}
