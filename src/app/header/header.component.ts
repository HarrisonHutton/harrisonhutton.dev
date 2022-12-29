import { Component, HostListener, Input } from '@angular/core';
import { Section } from '../@interfaces/section';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  appRoot = document.getElementsByTagName('app-root')[0];

  @Input() sections: Section[] = [];

  @HostListener('click', ['$event.target'])
  onClick(target: HTMLElement) {
    if (target.classList.contains('nav__link')) {
      this.removeNav();
    }
  }

  toggleNav() {
    this.appRoot.classList.toggle('nav-open');
  }

  removeNav() {
    this.appRoot.classList.remove('nav-open');
  }

}
