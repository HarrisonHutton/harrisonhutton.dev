import { Component, HostListener, Input } from '@angular/core';
import { Section } from '../@interfaces/section';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @Input() sections: Section[] = [];

  // @HostListener('click', ['$event.target'])
  // onClick(target: HTMLElement) {
  //   if (target.classList.contains('nav__link')) {
  //     this.removeNav();
  //   }
  // }

  toggleNav() {
    let appRoot = document.getElementsByTagName('app-root')[0];
    appRoot.classList.toggle('nav-open');
  }

}
