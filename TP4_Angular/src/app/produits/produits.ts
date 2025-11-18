import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-produits',
  imports: [CommonModule, FormsModule],
  templateUrl: './produits.html',
  styleUrl: './produits.css',
})
export class Produits {
 produits = [
    { nom: 'Clavier', stock: 70 },
    { nom: 'Souris', stock: 45 },
    { nom: 'Écran', stock: 15 }
  ];

  // Méthode pour modifier le stock dynamiquement
  mettreAJourStock(produit: any, event: any): void {
    const valeur = Number(event.target.value);
    if (!isNaN(valeur)) {
      produit.stock = valeur;
    }
  }

  // Méthode pour renvoyer la couleur selon le stock
  getCouleur(stock: number): string {
    if (stock > 50) return 'green';
    if (stock >= 20) return 'orange';
    return 'red';
  }
}
