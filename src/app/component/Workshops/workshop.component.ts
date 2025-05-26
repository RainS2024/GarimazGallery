import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-workshop',
  imports: [CommonModule],
  templateUrl: './workshop.component.html',
  styleUrl: './workshop.component.css'
})
export class WorkshopComponent {
   isLightboxOpen: boolean = false;
  lightboxImage: string = '';

  openLightbox(imageUrl: string) {
    this.lightboxImage = imageUrl;
    this.isLightboxOpen = true;
  }

  closeLightbox() {
    this.isLightboxOpen = false;
    this.lightboxImage = '';
  }
}
