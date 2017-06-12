import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-my-account',
  templateUrl: 'my-account.html',
})
export class MyAccountPage {

  title:string = "Minha Conta +55lab.co";
  imageName = "default-profile.jpeg";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

}
