import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-articles',
  imports: [CommonModule, FormsModule],
  templateUrl: './articles.html',
  styleUrl: './articles.css',
})
export class Articles {
  articles = [
    { titre: 'Angular 17 est arrivé', contenu: 'Découvrez les nouveautés d’Angular 17.', importance: 'élevée' },
    { titre: 'TypeScript : Bonnes pratiques', contenu: 'Astuces pour un code plus propre.', importance: 'moyenne' },
    { titre: 'HTML et CSS modernes', contenu: 'Mettez à jour vos connaissances.', importance: 'faible' }
  ];

  // Champs pour les nouveaux articles
  nouveauTitre = '';
  nouveauContenu = '';
   nouvelleImportance = 'faible';

  // Méthode d’ajout
  ajouterArticle(): void {
    if (this.nouveauTitre.trim() && this.nouveauContenu.trim()) {
      this.articles.push({
        titre: this.nouveauTitre,
        contenu: this.nouveauContenu,
        importance: this.nouvelleImportance
      });
      this.nouveauTitre = '';
      this.nouveauContenu = '';
      this.nouvelleImportance = 'faible';
    } else {
      alert('Veuillez remplir tous les champs.');
    }
  }

}
