import { Component, viewChild, ViewChild } from '@angular/core';
import { FilsComponent } from '../fils/fils';

@Component({
  selector: 'app-pere',
  imports: [FilsComponent],
  templateUrl: './pere.html',
  styleUrl: './pere.css',
})
export class PereComponent {
  // @ViewChild(FilsComponent) fils!: FilsComponent
  fils = viewChild(FilsComponent)
  nom = 'John Wick'
  maVille = 'Marseille'

  premierEnfant() {
    console.log(this.fils());
    console.log(this.fils()?.ville());
  }
}
