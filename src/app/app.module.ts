import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { LoginPage } from '../pages/login/login';
import { AccessFormPage } from '../pages/access-form/access-form';
import { TabsPage } from '../pages/tabs/tabs';
import { TimelinePage } from '../pages/timeline/timeline';
import { BenefitsPage } from '../pages/benefits/benefits';
import { MyAccountPage } from '../pages/my-account/my-account';
import { NotificationsPage } from '../pages/notifications/notifications';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ParseProvider } from '../providers/parse/parse';
import { HeaderViewComponent } from '../components/header-view/header-view';
import { NotificationItemRowComponent } from '../components/notification-item-row/notification-item-row';
import { ImageHeaderComponent } from '../components/image-header/image-header';
import { BenefitItemRowComponent } from '../components/benefit-item-row/benefit-item-row';
import { TitleDetailComponent } from '../components/title-detail/title-detail';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    TimelinePage,
    BenefitsPage,
    MyAccountPage,
    NotificationsPage,
    LoginPage,
    AccessFormPage,
    HeaderViewComponent,
    NotificationItemRowComponent,
    ImageHeaderComponent,
    BenefitItemRowComponent,
    TitleDetailComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    TimelinePage,
    BenefitsPage,
    MyAccountPage,
    NotificationsPage,
    LoginPage,
    AccessFormPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ParseProvider
  ]
})
export class AppModule {}
