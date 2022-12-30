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

    /* Prevent the header from disappearing on mobile devices when the user
     * scrolls to the top of the page. */
    if (currentScrollY < 0) return;

    const header = this.renderer.selectRootElement('header', true);

    if (currentScrollY > this.previousScrollY) {
      this.renderer.addClass(header, 'header--hidden');
    }
    else {
      this.renderer.removeClass(header, 'header--hidden');
    }

    this.previousScrollY = currentScrollY;
  }

}
