import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Personne } from '../../models/personne';

@Component({
  selector: 'app-formulaire-simple',
  imports: [FormsModule],
  templateUrl: './formulaire-simple.html',
  styleUrl: './formulaire-simple.css',
})
export class FormulaireSimpleComponent {
  personne: Personne = {}
  personnes: Personne[] = []

  afficher(form: NgForm) {
    console.log(this.personne);
    this.personnes.push({ ...this.personne })
    this.personne = {}
    form.reset()
  }
}

/*
Dans une balise form, ajouter trois champs
nom,
prenom
age
et un bouton de soumission
en cliquant sur le bouron on affiche 
les données du formulaire dans la console
sous forme d'objet 

*/
