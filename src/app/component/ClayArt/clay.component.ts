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
  isZelleModalOpen = false;

  openLightbox(imageUrl: string) {
    this.lightboxImage = imageUrl;
    this.isLightboxOpen = true;
  }

  closeLightbox() {
    this.isLightboxOpen = false;
    this.lightboxImage = '';
     
  }
   orderItem() {
    window.open(
      'https://docs.google.com/forms/d/e/1FAIpQLScDQL6SlaJLUFUkEhbabKU3woHGyCIlQWXKdNccEvHiWYN-Gg/viewform?usp=header',
      '_blank'
    );
  }
   openVenmo(): void {
    const venmoUrl = 'https://venmo.com/u/Garima-Singh-28'; // Replace with your Venmo link
    window.open(venmoUrl, '_blank');
  }
  openZelleModal(): void {
    this.isZelleModalOpen = true;
  }

  closeZelleModal(): void {
    this.isZelleModalOpen = false;
  }
}

