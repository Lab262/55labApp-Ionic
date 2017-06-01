import { Component } from '@angular/core';

import { TimelinePage } from '../timeline/timeline';
import { BenefitsPage } from '../benefits/benefits';
import { MyAccountPage } from '../my-account/my-account';
import { NotificationsPage } from '../notifications/notifications';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = TimelinePage;
  tab2Root = BenefitsPage;
  tab3Root = MyAccountPage;
  tab4Root = NotificationsPage;

  constructor() {

  }
}
