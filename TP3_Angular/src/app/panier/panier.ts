import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Produit } from '../produit/produit';

@Component({
  selector: 'app-panier',
  standalone: true,
  imports: [CommonModule, Produit],
  templateUrl: './panier.html',
  styleUrls: ['./panier.css']
})
export class Panier {
  panier: { nom: string; prix: number }[] = [];

  onProduitAjoute(produit: { nom: string; prix: number }) {
    this.panier.push(produit);
    console.log('Produit ajouté :', produit);
  }
}
