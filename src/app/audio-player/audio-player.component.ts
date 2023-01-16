import { Component, Input } from '@angular/core';

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

  constructor() {
    this.audio = new Audio();
  }

  playAudio(audioSrc: string) {
    this.audio.src = audioSrc;
    this.audio.load();
    this.audio.play();
  }

  pauseAudio() {
    this.audio.pause();
  }

}
