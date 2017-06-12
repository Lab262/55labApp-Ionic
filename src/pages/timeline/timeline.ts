import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-timeline',
  templateUrl: 'timeline.html',
})
export class TimelinePage {

  title:string = "Bem vindo a +55Lab.co Community, Vanessa";
  haveImage:boolean = true;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

}
