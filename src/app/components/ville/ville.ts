import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ville',
  imports: [FormsModule],
  templateUrl: './ville.html',
  styleUrl: './ville.css',
})
export class VilleComponent {
  @Input() ville = ''
  @Output() sendUpdate = new EventEmitter<string>();

  update() {
    this.sendUpdate.emit(this.ville)
  }
}
