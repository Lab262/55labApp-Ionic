import { Component, Input, Renderer} from '@angular/core';
import { NavController } from 'ionic-angular';
import { BenefitDetailPage } from '../../pages/benefit-detail/benefit-detail';


@Component({
  selector: 'benefit-item-row',
  templateUrl: 'benefit-item-row.html'
})
export class BenefitItemRowComponent {

  @Input('benefit') benefit:any;

  titleButton = "Solicitar";


  constructor(public renderer: Renderer, public navCtrl:NavController) {
  }

  selectBenefit(){
    this.navCtrl.parent.parent.push(BenefitDetailPage,{benefit: this.benefit},{animation:"ios-transition"});
  }

}
