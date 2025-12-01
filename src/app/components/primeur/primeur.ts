import { Component } from '@angular/core';
import { Produit } from '../../models/produit';
import { ProduitComponent } from "../produit/produit";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-primeur',
  imports: [ProduitComponent, FormsModule],
  templateUrl: './primeur.html',
  styleUrl: './primeur.css',
})
export class PrimeurComponent {
  total = 0
  produit: Produit = { nom: '', prix: 0, quantite: 0 }
  produits: Produit[] = [
    { nom: "banane", prix: 3, quantite: 10 },
    { nom: "fraise", prix: 10, quantite: 20 },
    { nom: "poivron", prix: 5, quantite: 10 }
  ]
  ajouterProduit() {
    this.produits.push(this.produit)
    this.produit = { nom: '', prix: 0, quantite: 0 }
  }
  calculerTotal(qteCommandee: number, index: number) {
   
    this.total += qteCommandee * this.produits[index].prix
    this.produits[index].quantite -= qteCommandee
  }
}
