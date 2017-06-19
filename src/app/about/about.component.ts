import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],

  animations: [
    trigger('flyInOut', [
     state('in', style({
       transform: 'translateY(-50%) rotateX(0deg)',
       opacity: 1,
     })),
     transition('void => *', [
       style({
         transform: 'translateY(-25%) rotateX(-45deg)',
         opacity: 0,
       }),
       animate('400ms ease')
     ]),
     transition('* => void', [
       animate(400, style({transform: 'translateX(100%)'}))
     ])
   ])
]
})
export class AboutComponent implements OnInit {

  state: string = 'inactive';

  constructor() { }

  ngOnInit() {
    this.state = 'in';
  }

}
