import { Component, Input, ElementRef, ViewChild, Renderer } from '@angular/core';
import { NotificationModel } from "../../models/NotificationModel"


@Component({
  selector: 'notification-item-row',
  templateUrl: 'notification-item-row.html'
})
export class NotificationItemRowComponent {

  private name: string;
  private text: string;
  private hour: string;
  private imageName:string;
  private isFollow: boolean;

  @Input('notification') notification:any;

  @ViewChild('imageProfile') imageProfile:ElementRef;
  @ViewChild('buttonFollow') buttonFollow:ElementRef;

  private imageUrl: string = 'url(../assets/images/';

  constructor(public renderer: Renderer) {
  }

  ngAfterViewInit(){
    console.log("inittttttttt");
    this.setInformationsNotification();
    this.setViewsContent();
  }

  setInformationsNotification(){
    this.name = this.notification.nameUser;
    this.text = this.notification.textNotification;
    this.hour = this.notification.hourNotification;
    this.imageName = this.notification.imageProfile;
    this.isFollow = this.notification.isFollow;
  }

  setViewsContent(){
    this.imageUrl = this.imageUrl + this.imageName + ')';
    this.renderer.setElementStyle(this.imageProfile.nativeElement, "backgroundImage", this.imageUrl);

    // if(this.isFollow==false){
    //   this.renderer.setElementStyle(this.imageProfile.nativeElement, "visibility", "hidden");
    // }
  }

}
