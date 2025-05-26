import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-art',
  imports: [CommonModule],
  templateUrl: './art.component.html',
  styleUrl: './art.component.css'
})
export class ArtComponent {
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
