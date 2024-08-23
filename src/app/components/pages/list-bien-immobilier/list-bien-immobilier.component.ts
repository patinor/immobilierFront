import { Component } from '@angular/core';
import { BienImmobilier } from '../../../models/data/bien-immobilier';
import { BienImmobilierServiceService } from '../../../service/bien-immobilier-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-bien-immobilier',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-bien-immobilier.component.html',
  styleUrl: './list-bien-immobilier.component.css'
})
export class ListBienImmobilierComponent {

   listesBienImmobilier:BienImmobilier[]=[]

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
}
