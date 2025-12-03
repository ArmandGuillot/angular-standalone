import { Component, signal } from '@angular/core';
import { User } from '../../models/user';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  imports: [FormsModule],
  templateUrl: './auth.html',
  styleUrl: './auth.css',
})
export class AuthComponent {
  erreur = signal<string | null>(null)
  user: User = { username: '', password: '' }
  users: User[] = [
    { username: 'user', password: 'user' },
    { username: 'admin', password: 'admin' },
    { username: 'sadmin', password: 'sadmin' },
  ]
  constructor(private router: Router) { }
  seConnecter() {
    if (this.users.some(u => u.password == this.user.password && u.username == this.user.username)) {
      this.router.navigateByUrl('/primeur')

    } else {
      this.erreur.set("Identifiants incorrects")
    }
  }


}
