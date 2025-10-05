import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-video',
  imports: [CommonModule],
  templateUrl: './Video.component.html',
  styleUrl: './Video.component.css'
})
export class VideoComponent {
  // Add your videos here
    videos: { id: string; title: string; url?: SafeResourceUrl }[] = [
    {id: 'GjDXnHYg9Lc',title: "Launch of Garimaz Gallery"},
    {id: 'p9a2m-px5rI',title: "Card Bunndle"},
    {id: 'PzOrNENbxh4',title: "Teacher's Apprrciation Card"},
    {id: 'NyNW6pYBP1U',title: "Customized Gifts"},
    {id: 'LV856zvpajE',title: "Mother's Day Gift"},
    {id: 'qwia4hgYegk',title: "Anniversary Gift"},
    {id: 'iL0YABPJvOc',title: "60th Anniversary Gift"},
    {id: 'HLhR3VnNbMQ',title: "Room Tags"},
    {id: 'mX2o5AphNpU',title: "Christmas Gift"},
    {id: 'eW5uxVF6u98', title: "Art Workshops-2"},
    {id: 'msNV_D2iJgA',title: "Art Workshops-1"},  
    // Add more videos as needed
  ];
   constructor(private sanitizer: DomSanitizer) {
    // Convert URLs to SafeResourceUrl
    this.videos.forEach(video => {
      video.url = this.sanitizer.bypassSecurityTrustResourceUrl(
        `https://www.youtube.com/embed/${video.id}`
      );
    });
  }
}
