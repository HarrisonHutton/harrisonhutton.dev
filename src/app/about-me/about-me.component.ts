import { Component } from '@angular/core';
import { AudioPlayerService } from '../@services/audio-player.service';

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

  constructor(private audioPlayer: AudioPlayerService) { }

  ngOnInit() {
    this.audioPlayer.showModal$.subscribe(showModal => {
      this.showAudioPlayer = showModal;
    });
  }

  openAudioPlayer() {
    this.audioPlayer.updateShowModal(true);
  }
  /* closeAudioPlayer() defined in audio-player.component.ts */

}
