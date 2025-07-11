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
      image: 'https://garimas-gallery-images.s3.us-west-1.amazonaws.com/Cards/Raksha_Bandhan.jpg',
      alt: 'Greeting Card 16', code: 'Festival - Raksha Bandhan',isPremium: true,
    },
    {
      image: 'https://garimas-gallery-images.s3.us-west-1.amazonaws.com/Cards/PR-1.jpg',
      alt: 'Greeting Card 15', code: 'Special Occasion-Marriage',isPremium: true,
    },
    {
      image: 'https://garimas-gallery-images.s3.us-west-1.amazonaws.com/Cards/SG-1.png',
      alt: 'Greeting Card 1', code: 'ShriGanesh-1',isPremium: false,
    },
    {
      image: 'https://garimas-gallery-images.s3.us-west-1.amazonaws.com/Cards/BD-1.png',
      alt: 'Greeting Card 2', code: 'Birthday-1',isPremium: false,
    },
    {
      image: 'https://garimas-gallery-images.s3.us-west-1.amazonaws.com/Cards/BD-2.png',
      alt: 'Greeting Card 3', code: 'Birthday-2',isPremium: false,
    },
    {
      image: 'https://garimas-gallery-images.s3.us-west-1.amazonaws.com/Cards/FL-1.png',
      alt: 'Greeting Card 4', code: 'Flower-1',isPremium: false,
    },
    {
      image: 'https://garimas-gallery-images.s3.us-west-1.amazonaws.com/Cards/FL-2.png',
      alt: 'Greeting Card 5', code: 'Flower-2',isPremium: false,
    },
    {
      image: 'https://garimas-gallery-images.s3.us-west-1.amazonaws.com/Cards/FL-3.png',
      alt: 'Greeting Card 6', code: 'Flower-3',isPremium: false,
    },
    {
      image: 'https://garimas-gallery-images.s3.us-west-1.amazonaws.com/Cards/FL-4.png',
      alt: 'Greeting Card 7', code: 'Flower-4',isPremium: false,
    },
    {
      image: 'https://garimas-gallery-images.s3.us-west-1.amazonaws.com/Cards/SC-1.png',
      alt: 'Greeting Card 8', code: 'Scene-1',isPremium: false,
    },
    {
      image: 'https://garimas-gallery-images.s3.us-west-1.amazonaws.com/Cards/SC-2.png',
      alt: 'Greeting Card 9', code: 'Scene-2',isPremium: false,
    },
    {
      image: 'https://garimas-gallery-images.s3.us-west-1.amazonaws.com/Cards/MD.png',
      alt: 'Greeting Card 10', code: 'MothersDay',isPremium: false,
    },
    {
      image: 'https://garimas-gallery-images.s3.us-west-1.amazonaws.com/Cards/HRT-1.png',
      alt: 'Greeting Card 11', code: 'Heart-1',isPremium: false,
    },
    {
      image: 'https://garimas-gallery-images.s3.us-west-1.amazonaws.com/Cards/HRT-2.png',
      alt: 'Greeting Card 12', code: 'Heart-2',isPremium: false,
    },
    {
      image: 'https://garimas-gallery-images.s3.us-west-1.amazonaws.com/Cards/GR-1.png',
      alt: 'Greeting Card 13', code: 'Graduation-1',isPremium: false,
    },
    {
      image: 'https://garimas-gallery-images.s3.us-west-1.amazonaws.com/Cards/GR-2.png',
      alt: 'Greeting Card 14', code: 'Graduation-2',isPremium: false,
    },
  
    {
      image: 'https://garimas-gallery-images.s3.us-west-1.amazonaws.com/Cards/Fathers+Day+Card.jpg',
      alt: 'Greeting Card 16', code: 'FathersDay',isPremium: false,
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
