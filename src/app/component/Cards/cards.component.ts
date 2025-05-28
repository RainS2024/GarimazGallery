import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cards',
  imports: [CommonModule],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent {
 cards = [
    {
      image: 'https://garimas-gallery-images.s3.us-west-1.amazonaws.com/Cards/SG-1.png',
      alt: 'Greeting Card 1', code: 'SG-1',isPremium: false,
    },
    {
      image: 'https://garimas-gallery-images.s3.us-west-1.amazonaws.com/Cards/BD-1.png',
      alt: 'Greeting Card 2', code: 'BD-1',isPremium: false,
    },
    {
      image: 'https://garimas-gallery-images.s3.us-west-1.amazonaws.com/Cards/BD-2.png',
      alt: 'Greeting Card 3', code: 'BD-2',isPremium: false,
    },
    {
      image: 'https://garimas-gallery-images.s3.us-west-1.amazonaws.com/Cards/FL-1.png',
      alt: 'Greeting Card 4', code: 'FL-1',isPremium: false,
    },
    {
      image: 'https://garimas-gallery-images.s3.us-west-1.amazonaws.com/Cards/FL-2.png',
      alt: 'Greeting Card 5', code: 'FL-2',isPremium: false,
    },
    {
      image: 'https://garimas-gallery-images.s3.us-west-1.amazonaws.com/Cards/FL-3.png',
      alt: 'Greeting Card 6', code: 'FL-3',isPremium: false,
    },
    {
      image: 'https://garimas-gallery-images.s3.us-west-1.amazonaws.com/Cards/FL-4.png',
      alt: 'Greeting Card 7', code: 'FL-4',isPremium: false,
    },
    {
      image: 'https://garimas-gallery-images.s3.us-west-1.amazonaws.com/Cards/SC-1.png',
      alt: 'Greeting Card 8', code: 'SC-1',isPremium: false,
    },
    {
      image: 'https://garimas-gallery-images.s3.us-west-1.amazonaws.com/Cards/SC-2.png',
      alt: 'Greeting Card 9', code: 'SC-2',isPremium: false,
    },
    {
      image: 'https://garimas-gallery-images.s3.us-west-1.amazonaws.com/Cards/MD.png',
      alt: 'Greeting Card 10', code: 'MD',isPremium: false,
    },
    {
      image: 'https://garimas-gallery-images.s3.us-west-1.amazonaws.com/Cards/HRT-1.png',
      alt: 'Greeting Card 11', code: 'HRT-1',isPremium: false,
    },
    {
      image: 'https://garimas-gallery-images.s3.us-west-1.amazonaws.com/Cards/HRT-2.png',
      alt: 'Greeting Card 12', code: 'HRT-2',isPremium: false,
    },
    {
      image: 'https://garimas-gallery-images.s3.us-west-1.amazonaws.com/Cards/GR-1.png',
      alt: 'Greeting Card 13', code: 'GR-1',isPremium: false,
    },
    {
      image: 'https://garimas-gallery-images.s3.us-west-1.amazonaws.com/Cards/GR-2.png',
      alt: 'Greeting Card 14', code: 'GR-2',isPremium: false,
    },
    {
      image: 'https://garimas-gallery-images.s3.us-west-1.amazonaws.com/Cards/PR-1.jpg',
      alt: 'Greeting Card 15', code: 'PR-1',isPremium: true,
    },
    // Add more card objects here
  ];

  isLightboxOpen = false;
  lightboxImage = '';
  isZelleModalOpen = false;

  openLightbox(image: string) {
    this.isLightboxOpen = true;
    this.lightboxImage = image;
  }

  closeLightbox() {
    this.isLightboxOpen = false;
    this.lightboxImage = '';
  }
  getCardPricing(card: any): string {
  if (card.isPremium) {
    return 'Single Card: $5 each | Pack of 5 Cards: $20';
  }
  return 'Single Card: $4 each| Pack of 5 Cards: $15';
}

  orderCard() {
    window.open(
      'https://docs.google.com/forms/d/e/1FAIpQLSdrQYLoF-SzCQGPyCEsmbhEnGWX16fpP6WLXLrNiqbpuqaq3w/viewform?usp=dialog',
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
