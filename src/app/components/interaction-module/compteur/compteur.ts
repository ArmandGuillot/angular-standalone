import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment } from '../../../stores/counter/counter.action';
import { selectValeur } from '../../../stores/counter/counter.selector';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-compteur',
  imports: [CommonModule],
  templateUrl: './compteur.html',
  styleUrl: './compteur.css',
})
export class CompteurComponent {
  valeur = 0
  // valeur$: Observable<number>
  constructor(private store: Store) {
    store.select(selectValeur).subscribe(v => this.valeur = v)
    // this.valeur$ = store.select(selectValeur)
  }
  incrementer() {
    this.store.dispatch(increment())
  }
  decrementer() {
    this.store.dispatch(decrement())
  }
}
