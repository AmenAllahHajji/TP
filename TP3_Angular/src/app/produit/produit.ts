import { Component ,Output,EventEmitter,Input} from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-produit',
  imports: [CommonModule],
  templateUrl: './produit.html',
  styleUrl: './produit.css',
})
export class Produit {
    imageUrl:string="https://img-0.journaldunet.com/6Vrvxcv3SwHHCnUtaBzMQMYor1I=/1280x/smart/32d90de13a5f411c86709152f70fc67c/ccmcms-jdn/10861192.jpg";
    afficherAlerte():void{
      alert("Produit ajouté au panier");
    }
    enStock:boolean=true;
    basculer():void{
      this.enStock=!this.enStock;

    }
    @Input() nomProduit: string = 'Produit par défaut';

  // Activité 8 : prix
  @Input() prix: number = 100;

  // Activité 6 : événement pour envoyer au parent
  @Output() ajouterAuPanier = new EventEmitter<{ nom: string; prix: number }>();

  ajouterProduit() {
    this.ajouterAuPanier.emit({
      nom: this.nomProduit,
      prix: this.prix
    });
  }

}
