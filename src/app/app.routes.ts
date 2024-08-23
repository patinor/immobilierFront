import { Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { ListBienImmobilierComponent } from './components/pages/list-bien-immobilier/list-bien-immobilier.component';

export const routes: Routes = [

    {path:'',component:HomeComponent},
    {path:'listeProduct',component:ListBienImmobilierComponent}

];
