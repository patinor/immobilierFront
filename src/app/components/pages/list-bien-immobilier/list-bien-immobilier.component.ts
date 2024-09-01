import { Component } from '@angular/core';
import { BienImmobilier } from '../../../models/data/bien-immobilier';
import { BienImmobilierServiceService } from '../../../service/bien-immobilier-service.service';
import { CommonModule } from '@angular/common';
import { DetailsBienImmobilierComponent } from '../../input/details-bien-immobilier/details-bien-immobilier.component';
import { FormsModule, NgForm } from '@angular/forms';
import { ClientService } from '../../../service/client.service';

@Component({
  selector: 'app-list-bien-immobilier',
  standalone: true,
  imports: [CommonModule,DetailsBienImmobilierComponent,FormsModule],
  templateUrl: './list-bien-immobilier.component.html',
  styleUrl: './list-bien-immobilier.component.css'
})
export class ListBienImmobilierComponent {

   listesBienImmobilier:BienImmobilier[]=[]


   productDetails?:BienImmobilier


   bien_id!:number;
   client_id!:number|any
   date_propose!:string


   constructor(private bienService:BienImmobilierServiceService,private clientService:ClientService)
  { this.bienService.getAllBienImmobilier().subscribe(
    (data: BienImmobilier[]) => {
      this.listesBienImmobilier = data;
      console.log(this.listesBienImmobilier);
    },
    (error) => {
      console.error('Error fetching biens immobiliers', error);
    }
  );
  this.client_id=sessionStorage.getItem('authToken')
}

  selecProduct(product:BienImmobilier){

    this.productDetails=product
    console.log("C est cablé pape ")
  
  }

  setProduct(idProduct:number){
    this.bien_id=idProduct
  }

  submit(visiteForm:NgForm){
    if( visiteForm.invalid){

      alert("Veuillez rentrer une date")
      return;
    }
    const client=this.clientService.getAuthentification()
    if(!client){

      alert("Veuillez vous connecté")
      return;
    }

    this.clientService.demandeVisite(client,this.bien_id,this.date_propose).subscribe
(
      (response: any) => {
        console.log(response);
        if (response.message !=='Information incorrecte') {
          console.log(response.message)
          alert('Demande effectué avec succes  🆗 !');
        } else {
          alert('Une erreur c est produite ');
        }
      },
      (error) => {
        console.log('Error during login:', error);
      }
    );

  }
}
