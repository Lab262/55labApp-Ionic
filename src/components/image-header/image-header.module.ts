import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ImageHeaderComponent } from './image-header';

@NgModule({
  declarations: [
    ImageHeaderComponent,
  ],
  imports: [
    IonicPageModule.forChild(ImageHeaderComponent),
  ],
  exports: [
    ImageHeaderComponent
  ]
})
export class ImageHeaderComponentModule {}
