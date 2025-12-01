import { Injectable } from '@angular/core';
import { Personne } from '../models/personne';

@Injectable({
  providedIn: 'root',
})
export class PersonneService {

  private personnes: Personne[]

  constructor() {
    this.personnes = [
      { id: 1, nom: "Wick", prenom: "John", age: 45 },
      { id: 2, nom: "Dalton", prenom: "Jack", age: 55 },
      { id: 3, nom: "Maggio", prenom: "Candice", age: 27 },
      { id: 4, nom: "Linus", prenom: "Sophie", age: 67 },
    ]
  }

  findAll() {
    return this.personnes
  }

  save(p: Personne) {
    this.personnes.push(p)
  }
  remove(ind: number) {
    this.personnes.splice(ind, 1)
  }
}
