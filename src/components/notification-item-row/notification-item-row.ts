import { Component, Input, ElementRef, ViewChild, Renderer } from '@angular/core';

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

  private imageUrl: string = 'url(../assets/images/header-view/';

  constructor(public renderer: Renderer) {
  }

  ngAfterViewInit(){
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
  }

}
