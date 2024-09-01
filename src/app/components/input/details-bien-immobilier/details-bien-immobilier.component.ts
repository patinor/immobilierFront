import { Component, Input } from '@angular/core';
import { BienImmobilier } from '../../../models/data/bien-immobilier';

@Component({
  selector: 'app-details-bien-immobilier',
  standalone: true,
  imports: [],
  templateUrl: './details-bien-immobilier.component.html',
  styleUrl: './details-bien-immobilier.component.css'
})
export class DetailsBienImmobilierComponent {

   @Input()  product?:BienImmobilier
}
