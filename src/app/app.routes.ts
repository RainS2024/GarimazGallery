import { Routes } from '@angular/router';
import { HomeComponent } from './component/Home/home.component';
import { CardsComponent } from './component/Cards/cards.component';
import { ArtComponent } from './component/Art/art.component';
import { WorkshopComponent } from './component/Workshops/workshop.component';
import { ClayComponent } from './component/ClayArt/clay.component';
import { LinksComponent } from './component/Links/links.component';
import { VideoComponent } from './component/Videos/Video.component';



export const routes: Routes = [
  { path: '', component: HomeComponent}, // Default route to Welcome page
  { path: 'cardgallery', component: CardsComponent },
   { path: 'artgallery', component: ArtComponent },
   { path: 'clayart', component: ClayComponent },
  { path: 'workshops', component: WorkshopComponent },
  { path: 'links', component: LinksComponent },
  {path: 'videos', component: VideoComponent},
  
  { path: '**', redirectTo: '', pathMatch: 'full' }, // Wildcard route
];