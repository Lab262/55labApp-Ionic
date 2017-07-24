import { Component, Input, Renderer} from '@angular/core';


@Component({
  selector: 'benefit-item-row',
  templateUrl: 'benefit-item-row.html'
})
export class BenefitItemRowComponent {

  @Input('benefit') benefit:any;

  titleButton = "Solicitar";


  constructor(public renderer: Renderer) {
  }

  selectBenefit(){

  }

}
