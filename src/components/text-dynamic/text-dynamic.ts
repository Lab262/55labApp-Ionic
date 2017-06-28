import { Component } from '@angular/core';

@Component({
  selector: 'text-dynamic',
  templateUrl: 'text-dynamic.html'
})
export class TextDynamicComponent {

  text: string;

  constructor() {
    console.log('Hello TextDynamicComponent Component');
    this.text = 'Hello World';
  }

}
