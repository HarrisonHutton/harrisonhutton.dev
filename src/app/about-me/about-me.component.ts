import { Component } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent {

  prismAudioSrc: string = 'assets/audio/Prism_GuitarSolos_Demo.wav';
  prismAlbumArtSrc: string = 'assets/prism_album_art.jpg';
  prismAlbumArtAlt: string = 'Prism album art';
  prismTitle: string = 'Prism (Demo)';
  prismArtistName: string = 'Harrison Hutton';

  showAudioPlayer: boolean = false;

  constructor() { }

  openAudioPlayer() {
    this.showAudioPlayer = true;
  }

  closeAudioPlayer() {
    console.log('closeAudioPlayer() called');
    this.showAudioPlayer = false;
  }

}
