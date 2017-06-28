import { Component, Renderer, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'title-detail',
  templateUrl: 'title-detail.html'
})
export class TitleDetailComponent {

  @Input('title') title:any;
  @Input('fontName') fontName:any;
  @Input('fontSize') fontSize:any;
  @Input('backgroundColor') backgroundColor:any;

  @ViewChild('titleLabel') titleLabel:ElementRef;
  @ViewChild('detail') detail:ElementRef;

  constructor(public renderer: Renderer) {
  }

  ngAfterViewInit(){
    this.setViewsContent();
  }

  setViewsContent(){
    this.renderer.setElementStyle(this.titleLabel.nativeElement, "font-family", this.fontName);
    this.renderer.setElementStyle(this.titleLabel.nativeElement, "font-size", this.fontSize);
    console.log(this.detail);
    console.log(this.backgroundColor);
    this.renderer.setElementStyle(this.detail.nativeElement, "background", this.backgroundColor);
  }

}
