import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-notifications',
  templateUrl: 'notifications.html',
})
export class NotificationsPage {

  title:string = "Notificações";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

}
