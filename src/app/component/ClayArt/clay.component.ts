import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-clay',
  imports: [CommonModule],
  templateUrl: './clay.component.html',
  styleUrl: './clay.component.css'
})
export class ClayComponent {
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
