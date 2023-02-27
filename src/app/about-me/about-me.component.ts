import { AfterViewInit, Component, OnInit } from '@angular/core';
import { AudioPlayerService } from '../@services/audio-player.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit, AfterViewInit {

  /* Animation code */
  observer: IntersectionObserver = new IntersectionObserver((entries) => { 
    entries.forEach(entry => {
      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        // Only run the animation once, so do not remove the 'visible' class
        entry.target.classList.add('visible');
      }
      else {
        // If the element is not visible, remove the 'visible' class
        entry.target.classList.remove('visible');
      }
    });
  });
  
  prismAudioSrc: string = 'assets/audio/Prism_GuitarSolos_Demo.wav';
  prismAlbumArtSrc: string = 'assets/prism_album_art.jpg';
  prismAlbumArtAlt: string = 'Prism album art';
  prismTitle: string = 'Prism (Demo)';
  prismArtistName: string = 'Harrison Hutton';
  
  showAudioPlayer: boolean = false;
  
  constructor(private audioPlayer: AudioPlayerService) { }
  
  ngOnInit() {
    
    this.audioPlayer.showModal$.subscribe(showModal => {
      this.showAudioPlayer = showModal;
    });
  }
  
  ngAfterViewInit() {
    // Animation code
    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach(element => this.observer.observe(element));
  }

  openAudioPlayer() {
    this.audioPlayer.updateShowModal(true);
  }
  /* closeAudioPlayer() defined in audio-player.component.ts */

  openResume() {
    // open resume in new tab
    window.open('assets/Harrison_Hutton_Resume_02_27_23.pdf', '_blank');
  }

}
