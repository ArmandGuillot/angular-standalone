import { Component, OnInit, signal } from '@angular/core';
import { interval, Observable, Observer, take } from 'rxjs';

@Component({
  selector: 'app-observable',
  imports: [],
  templateUrl: './observable.html',
  styleUrl: './observable.css',
})
export class ObservableComponent implements OnInit {

  valeurs = signal<number[]>([]);
  state = signal<string>('');
  ngOnInit(): void {
    const observable$: Observable<number> = interval(1000)
      .pipe(take(10))

    observable$.subscribe({
      next: (v) => this.valeurs.update(arr => [...arr, v]),
      error: (err) => this.state.set(err),
      complete: () => this.state.set('Fin'),
    })
    // const observer: Observer<number> = {
    //   next: (v) => this.valeurs.update(arr => [...arr, v]),
    //   error: (err) => this.state.set(err),
    //   complete: () => this.state.set('Fin'),
    // }
    // observable$.subscribe(observer)
  }
}
