import { Component, Input, Renderer} from '@angular/core';


@Component({
  selector: 'benefit-item-row',
  templateUrl: 'benefit-item-row.html'
})
export class BenefitItemRowComponent {

  @Input('benefit') benefit:any;

  //Variables for title-detail component
  private defaultColorDetail = "#0A355C"; //$colorDarkBlue
  private defaultFont = "Gotham-Book";
  private defaultFontSize = "3.73vw";

  constructor(public renderer: Renderer) {
  }

}
