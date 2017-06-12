import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HeaderViewComponent } from './header-view';

@NgModule({
  declarations: [
    HeaderViewComponent,
  ],
  imports: [
    IonicPageModule.forChild(HeaderViewComponent),
  ],
  exports: [
    HeaderViewComponent
  ]
})
export class HeaderViewComponentModule {}
