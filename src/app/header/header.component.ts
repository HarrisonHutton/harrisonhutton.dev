import { Component, HostListener, Input, Renderer2 } from '@angular/core';
import { Section } from '../@interfaces/section';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @Input() sections: Section[] = [];

  private previousScrollY = 0;

  constructor(private renderer: Renderer2) {}

  /* Make header disappear on scroll down and reappear on scroll up. */
  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: UIEvent) {
    const currentScrollY = window.scrollY;
    const header = this.renderer.selectRootElement('header', true);

    if (currentScrollY > this.previousScrollY) {
      this.renderer.addClass(header, 'header--hidden', );
    }
    else {
      this.previousScrollY = 0;
      this.renderer.removeClass(header, 'header--hidden');
    }

    this.previousScrollY = currentScrollY;
  }

}
