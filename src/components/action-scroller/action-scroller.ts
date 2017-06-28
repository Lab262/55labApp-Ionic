import { Component } from '@angular/core';

@Component({
  selector: 'action-scroller',
  templateUrl: 'action-scroller.html'
})
export class ActionScrollerComponent {

  text: string;

  constructor() {
    console.log('Hello ActionScrollerComponent Component');
    this.text = 'Hello World';
  }

}
