import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Bonjour} from './bonjour/bonjour';
import {Articles} from './articles/articles';
import {Produits} from './produits/produits';
import {Taches} from './taches/taches';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Bonjour,Articles,Produits,Taches],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('TP4');
}
