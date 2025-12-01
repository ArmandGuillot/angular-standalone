import { Component, input, output } from '@angular/core';
import { Produit } from '../../models/produit';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-produit',
  imports: [FormsModule],
  templateUrl: './produit.html',
  styleUrl: './produit.css',
})
export class ProduitComponent {
  produit = input.required<Produit>()
  qteCommandee: number = 0
  onSendQuantity = output<number>()
  isDisabled = false
  ajouterPanier() {
    if (this.qteCommandee > 0 && this.qteCommandee <= this.produit().quantite) {
      this.onSendQuantity.emit(this.qteCommandee)
      this.isDisabled = true
    } else {
      alert("Merci de modifier la quantité")
    }

  }
}
