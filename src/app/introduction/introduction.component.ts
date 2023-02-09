import { Component } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.scss'],
  animations: [
    trigger('myTrigger', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20%)' }),
        animate(
          '1.25s cubic-bezier(0.5, 0, 0.5, 1)', 
          style({ opacity: 1, transform: 'translateY(0)' })
        )
      ]),
      transition(':leave', [
        animate('500ms', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class IntroductionComponent {

  isVisible = true;

}
