import { AfterViewInit, Component, OnInit, QueryList, viewChild, ViewChild, viewChildren, ViewChildren } from '@angular/core';
import { FilsComponent } from '../fils/fils';

@Component({
  selector: 'app-pere',
  imports: [FilsComponent],
  templateUrl: './pere.html',
  styleUrl: './pere.css',
})
export class PereComponent implements OnInit, AfterViewInit {
  // @ViewChild(FilsComponent) fils!: FilsComponent
  // @ViewChildren(FilsComponent) fils!: QueryList<FilsComponent>
  //Angular 19
  // fils = viewChild(FilsComponent)
  fils = viewChildren(FilsComponent)
  nom = 'John Wick'
  maVille = 'Marseille'

  //exécutée après l'initialisation du composant Pere
  ngOnInit(): void {
    console.log(this.fils);
  }

  //exécutée après l'initialisation de la vue
  ngAfterViewInit(): void {
    console.log(this.fils);
    
  }

  // premierEnfant() {
  //   console.log(this.fils);
  //   console.log(this.fils?.ville());
  // }

  tousLesEnfants() {
    this.fils().forEach(f => console.log(f.ville()));
  }
}
