import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // ✅ Importer FormsModule
import { CommonModule } from '@angular/common'; // utile pour *ngIf

@Component({
  selector: 'app-bonjour',
  standalone: true, // ✅ déclare qu’il s’agit d’un composant standalone
  imports: [CommonModule, FormsModule], // ✅ ajoute les modules nécessaires
  templateUrl: './bonjour.html',
  styleUrls: ['./bonjour.css'],
})
export class Bonjour {
  isLoggedIn = false;
  username = '';
  readonly correctName = 'Amen';

  basculer(): void {
    if (!this.isLoggedIn && this.username === this.correctName) {
      this.isLoggedIn = true;
    } else if (this.isLoggedIn) {
      this.isLoggedIn = false;
      this.username = '';
    } else {
      alert('Nom incorrect. Veuillez entrer votre prénom exact.');
    }
  }
}
