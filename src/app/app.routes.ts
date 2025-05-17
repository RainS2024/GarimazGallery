import { Routes } from '@angular/router';
import { HomeComponent } from './component/Home/home.component';
import { CardsComponent } from './component/Cards/cards.component';
import { ArtComponent } from './component/Art/art.component';
import { WorkshopComponent } from './component/Workshops/workshop.component';



export const routes: Routes = [
  { path: '', component: HomeComponent}, // Default route to Welcome page
  { path: 'cardgallery', component: CardsComponent },
   { path: 'artgallery', component: ArtComponent },
  { path: 'workshops', component: WorkshopComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }, // Wildcard route
];