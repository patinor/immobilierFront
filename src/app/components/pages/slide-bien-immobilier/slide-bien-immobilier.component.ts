import { Component } from '@angular/core';
import { BienImmobilier } from '../../../models/data/bien-immobilier';
import { BienImmobilierServiceService } from '../../../service/bien-immobilier-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-slide-bien-immobilier',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './slide-bien-immobilier.component.html',
  styleUrl: './slide-bien-immobilier.component.css'
})
export class SlideBienImmobilierComponent {

  listesBienImmobilier:BienImmobilier[]=[]

  products = [
    { name: 'Produit 1', price: 29.99, imageUrl: 'assets/product1.jpg' },
    { name: 'Produit 2', price: 49.99, imageUrl: 'assets/product2.jpg' },
    { name: 'Produit 3', price: 19.99, imageUrl: 'assets/product3.jpg' },
    // Ajoute plus de produits ici
  ];
  constructor(private bienService:BienImmobilierServiceService)
 { this.bienService.getAllBienImmobilier().subscribe(
   (data: BienImmobilier[]) => {
     this.listesBienImmobilier = data;
     console.log(this.listesBienImmobilier);
   },
   (error) => {
     console.error('Error fetching biens immobiliers', error);
   }
 );}



addToCart(product: any) {
  console.log('Produit ajouté au panier:', product);
  // Ajoute ici la logique pour ajouter le produit au panier
}

viewDetails(product: any) {
  console.log('Voir les détails du produit:', product);
  // Ajoute ici la logique pour afficher les détails du produit
}
}
