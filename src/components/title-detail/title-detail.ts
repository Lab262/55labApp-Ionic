import { Component } from '@angular/core';

@Component({
  selector: 'title-detail',
  templateUrl: 'title-detail.html'
})
export class TitleDetailComponent {

  text: string;

  constructor() {
    console.log('Hello TitleDetailComponent Component');
    this.text = 'Hello World';
  }

}
