import { Component } from '@angular/core';
import { ListBienImmobilierComponent } from '../list-bien-immobilier/list-bien-immobilier.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ListBienImmobilierComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
