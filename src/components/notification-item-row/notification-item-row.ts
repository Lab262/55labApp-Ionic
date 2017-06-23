import { Component, Input, ElementRef, ViewChild, Renderer, ViewContainerRef} from '@angular/core';

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

  private isNotificationFollow:boolean;
  private titleButton:string;

  @Input('notification') notification:any;

  @ViewChild('imageProfile') imageProfile:ElementRef;
  @ViewChild('buttonFollow') buttonFollow:any;

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

    if (this.notification.isFollow!=undefined){
        this.isNotificationFollow = true;
        this.isFollow = this.notification.isFollow;
        this.setButtonFollow();
    }else{
      this.isNotificationFollow = false;
    }
  }

  setViewsContent(){
    this.imageUrl = this.imageUrl + this.imageName + ')';
    this.renderer.setElementStyle(this.imageProfile.nativeElement, "backgroundImage", this.imageUrl);
  }

  setButtonFollow(){
    if (this.isFollow){
      this.titleButton = "Seguindo";
      this.renderer.setElementStyle(this.buttonFollow._elementRef.nativeElement, "background", "#E1495F");
    }else{
      this.titleButton = "Seguir";
      this.renderer.setElementStyle(this.buttonFollow._elementRef.nativeElement, "animation-name", "bounceIn");
      this.renderer.setElementStyle(this.buttonFollow._elementRef.nativeElement, "background", "#0A355C");
    }
  }

  selectedFollow(){
    this.isFollow = Boolean(1 - (+ this.isFollow));
    this.setButtonFollow();
  }

}
