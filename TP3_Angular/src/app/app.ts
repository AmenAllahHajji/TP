import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Bienvenue} from './bienvenue/bienvenue';
import {Produit} from './produit/produit';
import {FormsModule} from '@angular/forms';
import {Utilisateur} from './utilisateur/utilisateur';
import {Panier} from './panier/panier';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Bienvenue,Produit,FormsModule,Utilisateur,Panier],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('TP3');
}
