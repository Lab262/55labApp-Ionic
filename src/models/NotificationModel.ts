export class NotificationModel {

    constructor(public nameUser: string,
      public textNotification: string,
      public hourNotification: string,
      public imageProfile: string,
      public isFollow?: boolean){
      this.nameUser = nameUser;
      this.textNotification = textNotification;
      this.hourNotification = hourNotification;
      this.imageProfile = imageProfile;
      this.isFollow = isFollow;
    }
}
