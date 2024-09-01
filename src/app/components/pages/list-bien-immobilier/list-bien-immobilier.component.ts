import { Component } from '@angular/core';
import { BienImmobilier } from '../../../models/data/bien-immobilier';
import { BienImmobilierServiceService } from '../../../service/bien-immobilier-service.service';
import { CommonModule } from '@angular/common';
import { DetailsBienImmobilierComponent } from '../../input/details-bien-immobilier/details-bien-immobilier.component';

@Component({
  selector: 'app-list-bien-immobilier',
  standalone: true,
  imports: [CommonModule,DetailsBienImmobilierComponent],
  templateUrl: './list-bien-immobilier.component.html',
  styleUrl: './list-bien-immobilier.component.css'
})
export class ListBienImmobilierComponent {

   listesBienImmobilier:BienImmobilier[]=[]


   productDetails?:BienImmobilier

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

  selecProduct(product:BienImmobilier){

    this.productDetails=product

  
  }
}
