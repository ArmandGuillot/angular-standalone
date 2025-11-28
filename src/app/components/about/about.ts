import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import Stagiaire from '../../classes/stagiaire';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-about',
  imports: [CommonModule, RouterLink],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class AboutComponent {
  //  attributs
  isDisabled = true;
  title = 'angular-standalone';
  stagiaire = new Stagiaire(100, "Wick", "John")
  stagiaire2 = new Stagiaire(100, "Dalton")
  numbers = [2, 3, 8, 5, 1]
  stagiaires: Array<Stagiaire> = [
    new Stagiaire(100, 'Wick', 'John'),
    new Stagiaire(101, 'Abruzzi', 'John'),
    new Stagiaire(102, 'Marley', 'Bob'),
    new Stagiaire(103, 'Segal', 'Steven')
  ];
  moyennes: number[] = [18, 5, 11, 15, -10];
  couleur = 'white';
  bgCouleur = 'tomato';
  style = {
    color: 'white',
    backgroundColor: 'dodgerblue'
  };
  firstname = "Kostas";
  lastname = "Mitroglou";
  ville = "Toulouse";
  codePostal = "31000";
  // méthodes
  afficherBonjour() {
    return "Bonjour"
  }
  alertBonjour() {
    alert("Bonjour")
  }
  switchState() {
    this.isDisabled = !this.isDisabled
  }
  afficherTexte(event: Event) {
    // le dernier caractère saisi
    console.log((event as InputEvent).data);

    // le contenu de l'élément HTML input
    console.log((event.target as HTMLInputElement).value);
  }
}
