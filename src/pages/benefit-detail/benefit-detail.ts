import { Component, Input} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-benefit-detail',
  templateUrl: 'benefit-detail.html',
})
export class BenefitDetailPage {

  benefit:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.benefit = navParams.get("benefit");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BenefitDetailPage');
  }

}
