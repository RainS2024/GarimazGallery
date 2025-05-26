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
      alt: 'Greeting Card 1',isPremium: false,
    },
    {
      image: 'https://garimas-gallery-images.s3.us-west-1.amazonaws.com/Cards/BD-1.png',
      alt: 'Greeting Card 2',isPremium: false,
    },
    {
      image: 'https://garimas-gallery-images.s3.us-west-1.amazonaws.com/Cards/BD-2.png',
      alt: 'Greeting Card 3',isPremium: false,
    },
    {
      image: 'https://garimas-gallery-images.s3.us-west-1.amazonaws.com/Cards/FL-1.png',
      alt: 'Greeting Card 4',isPremium: false,
    },
    {
      image: 'https://garimas-gallery-images.s3.us-west-1.amazonaws.com/Cards/FL-2.png',
      alt: 'Greeting Card 5',isPremium: false,
    },
    {
      image: 'https://garimas-gallery-images.s3.us-west-1.amazonaws.com/Cards/FL-3.png',
      alt: 'Greeting Card 6',isPremium: false,
    },
    {
      image: 'https://garimas-gallery-images.s3.us-west-1.amazonaws.com/Cards/FL-4.png',
      alt: 'Greeting Card 7',isPremium: false,
    },
    {
      image: 'https://garimas-gallery-images.s3.us-west-1.amazonaws.com/Cards/SC-1.png',
      alt: 'Greeting Card 8',isPremium: false,
    },
    {
      image: 'https://garimas-gallery-images.s3.us-west-1.amazonaws.com/Cards/SC-2.png',
      alt: 'Greeting Card 9',isPremium: false,
    },
    {
      image: 'https://garimas-gallery-images.s3.us-west-1.amazonaws.com/Cards/MD.png',
      alt: 'Greeting Card 10',isPremium: false,
    },
    {
      image: 'https://garimas-gallery-images.s3.us-west-1.amazonaws.com/Cards/HRT-1.png',
      alt: 'Greeting Card 11',isPremium: false,
    },
    {
      image: 'https://garimas-gallery-images.s3.us-west-1.amazonaws.com/Cards/HRT-2.png',
      alt: 'Greeting Card 12',isPremium: false,
    },
    {
      image: 'https://garimas-gallery-images.s3.us-west-1.amazonaws.com/Cards/GR-1.png',
      alt: 'Greeting Card 13',isPremium: false,
    },
    {
      image: 'https://garimas-gallery-images.s3.us-west-1.amazonaws.com/Cards/GR-2.png',
      alt: 'Greeting Card 14',isPremium: false,
    },
    {
      image: 'https://garimas-gallery-images.s3.us-west-1.amazonaws.com/Cards/PR-1.jpg',
      alt: 'Greeting Card 15',isPremium: true,
    },
    // Add more card objects here
  ];

  isLightboxOpen = false;
  lightboxImage = '';

  openLightbox(image: string) {
    this.isLightboxOpen = true;
    this.lightboxImage = image;
  }

  closeLightbox() {
    this.isLightboxOpen = false;
    this.lightboxImage = '';
  }

  orderCard() {
    window.open(
      'https://docs.google.com/forms/d/e/1FAIpQLSdrQYLoF-SzCQGPyCEsmbhEnGWX16fpP6WLXLrNiqbpuqaq3w/viewform?usp=dialog',
      '_blank'
    );
  }
}
