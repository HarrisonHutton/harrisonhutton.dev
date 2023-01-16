import { Component, Input } from '@angular/core';
import { AudioPlayerService } from '../@services/audio-player.service';

@Component({
  selector: 'app-audio-player',
  templateUrl: './audio-player.component.html',
  styleUrls: ['./audio-player.component.scss']
})
export class AudioPlayerComponent {
  
  audio: HTMLAudioElement;

  @Input() audioSrc!: string;

  /* Assets */
  @Input() albumArtSrc: string = '';
  @Input() albumArtAlt: string = '';
  @Input() musicTitle: string = '';
  @Input() artistName: string = '';

  constructor( private audioPlayer: AudioPlayerService ) {
    this.audio = new Audio();
  }

  /* This is used to prevent any clicks on the music player from closing the modal */
  stopPropagation(event: Event) {
    event.stopPropagation();
  }

  playAudio(audioSrc: string) {
    this.audio.src = audioSrc;
    this.audio.load();
    this.audio.play();
  }

  pauseAudio() {
    this.audio.pause();
  }

  closeAudioPlayer() {
    this.audioPlayer.updateShowModal(false);
  }

}
