import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { NotificationModel } from "../../models/NotificationModel"

@Component({
  selector: 'page-notifications',
  templateUrl: 'notifications.html',
})
export class NotificationsPage {

  title:string = "Notificações";
  imageName = "default-profile.jpeg";
  notifications:NotificationModel[] = new Array();

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ngOnInit(){
    this.setDummyData();
  }

  setDummyData(){
    var notification1 = new NotificationModel("Viviana Araújo","fez um comentário em seu post.","2h",this.imageName, false);
    var notification2 = new NotificationModel("Maria Luiza Reibnitz","curtiu seu post.","5h",this.imageName, false);
    var notification3 = new NotificationModel("Thiago Bernades","começou a te seguir.","11h",this.imageName, true);
    var notification4 = new NotificationModel("Caio Ribeiro","te citou em um post.","1d",this.imageName, false);

    this.notifications.push(notification1);
    this.notifications.push(notification2);
    this.notifications.push(notification3);
    this.notifications.push(notification4);
  }

}
