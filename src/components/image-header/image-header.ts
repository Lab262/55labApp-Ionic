import { Component } from '@angular/core';

/**
 * Generated class for the ImageHeaderComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'image-header',
  templateUrl: 'image-header.html'
})
export class ImageHeaderComponent {

  text: string;

  constructor() {
    console.log('Hello ImageHeaderComponent Component');
    this.text = 'Hello World';
  }

}
