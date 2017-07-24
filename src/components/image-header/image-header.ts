import { Component, Renderer, Input, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'image-header',
  templateUrl: 'image-header.html'
})
export class ImageHeaderComponent {

  private title: string;
  private subtitle: string;
  private imageName:string;

  @Input('benefit') benefit:any;

  @ViewChild('imageBenefit') imageBenefit:ElementRef;

  private imageUrl: string = 'url(../assets/images/benefits/';

  constructor(public renderer: Renderer) {
  }

  ngAfterViewInit(){
    this.setInformationsImageHeader();
    this.setViewsContent();
  }

  setInformationsImageHeader(){
    this.title = this.benefit.name;
    this.subtitle = this.benefit.type.name;
    this.imageName = this.benefit.imageName;
  }

  setViewsContent(){
    this.imageUrl = this.imageUrl + this.imageName + ')';
    this.renderer.setElementStyle(this.imageBenefit.nativeElement, "backgroundImage", this.imageUrl);
  }

}
