import { Component } from '@angular/core';
import { Section } from './@interfaces/section';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  sections: Section[] = [
    {
      name: 'Home',
      id: ''
    },
    {
      name: 'About Me',
      id: 'about-me'
    },
    {
      name: 'My Work',
      id: 'my-work'
    },
    {
      name: 'Contact',
      id: 'contact'
    }
  ]

}
