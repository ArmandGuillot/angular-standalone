import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-adresse',
  imports: [RouterLink],
  templateUrl: './adresse.html',
  styleUrl: './adresse.css',
})
export class AdresseComponent implements OnInit {
  ville = ''
  cp = ''

  // Angular 14
  route = inject(ActivatedRoute)
  // constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {
    // solution asynchrone avec les observables
    this.route.queryParamMap.subscribe(params => {
      this.ville = params.get('ville') ?? ''
      this.cp = params.get('cp') ?? ''
    })
    // solution synchrone
    this.ville = this.route.snapshot.queryParamMap.get('ville') ?? ''
    this.cp = this.route.snapshot.queryParamMap.get('cp') ?? ''
  }


  
}
