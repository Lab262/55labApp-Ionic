import { Component, Input, Renderer, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'text-dynamic',
  templateUrl: 'text-dynamic.html'
})
export class TextDynamicComponent {

  @Input('text') text:any;
  @Input('fontSize') fontSize:any;

  @ViewChild('textLabel') textLabel:ElementRef;

  constructor(public renderer: Renderer) {
  }

  ngAfterViewInit(){
    this.setViewsContent();
  }

  setViewsContent(){
    if (this.fontSize!=null){
      this.renderer.setElementStyle(this.textLabel.nativeElement, "font-size", this.fontSize);
    }
  }

}
