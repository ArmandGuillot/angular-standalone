import { Component, OnInit } from '@angular/core';
import { interval, map, Observable, Subject, take } from 'rxjs';

@Component({
  selector: 'app-subject',
  imports: [],
  templateUrl: './subject.html',
  styleUrl: './subject.css',
})
export class SubjectComponent implements OnInit {
  ngOnInit(): void {
    const observable$: Observable<number> = interval(1000)
      .pipe(
        take(3),
        map(elt => elt + 3)
      )
    const subject = new Subject<number>()


    subject.subscribe({
      next: (v) => console.log(`A : ${v}`)
    })
    subject.next(1)

    subject.subscribe({
      next: (v) => console.log(`B : ${v}`)
    })
    subject.subscribe({
      next: (v) => console.log(`C : ${v}`)
    })
    // subject sous le rôle de l'observable
    subject.next(2)
    // subject sous le rôle de l'observateur
    observable$.subscribe(subject)
  }
}
