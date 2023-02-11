import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-my-work',
  templateUrl: './my-work.component.html',
  styleUrls: ['./my-work.component.scss']
})
export class MyWorkComponent implements AfterViewInit {

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

  ngAfterViewInit() {
    // Animation code
    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach(element => this.observer.observe(element));
  }

}
