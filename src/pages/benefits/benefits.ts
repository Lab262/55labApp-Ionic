import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HeaderViewComponent } from '../../components/header-view/header-view';

@Component({
  selector: 'page-benefits',
  templateUrl: 'benefits.html',
})
export class BenefitsPage {

  title:string = "Benefícios";
  haveImage:boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {

  }

}
