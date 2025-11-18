import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-taches',
  imports: [CommonModule,FormsModule],
  templateUrl: './taches.html',
  styleUrl: './taches.css',
})
export class Taches {
   taches = [
    { description: 'Réviser Angular', completee: false, priorite: 'haute' },
    { description: 'Faire les devoirs', completee: true, priorite: 'moyenne' },
    { description: 'Aller faire du sport', completee: false, priorite: 'basse' }
  ];

  // Champs pour nouvelle tâche
  nouvelleDescription = '';
  nouvellePriorite = 'basse';

  // Ajouter une tâche
  ajouterTache(): void {
    if (this.nouvelleDescription.trim()) {
      this.taches.push({
        description: this.nouvelleDescription,
        completee: false,
        priorite: this.nouvellePriorite
      });
      this.nouvelleDescription = '';
      this.nouvellePriorite = 'basse';
    } else {
      alert('Veuillez entrer une description.');
    }
  }

  // Bascule le statut complétée/non complétée
  basculerStatut(tache: any): void {
    tache.completee = !tache.completee;
  }

  // Détermine la couleur selon la priorité
  getCouleur(priorite: string): string {
    switch (priorite) {
      case 'haute':
        return 'red';
      case 'moyenne':
        return 'orange';
      default:
        return 'green';
    }
  }

}
