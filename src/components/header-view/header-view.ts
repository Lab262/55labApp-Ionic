import { Component, Input, ElementRef, ViewChild, Renderer} from '@angular/core';

@Component({
  selector: 'header-view',
  templateUrl: 'header-view.html'
})
export class HeaderViewComponent {

  @Input('title') title: any;
  @Input('subtitle') subtitle: any;
  @Input('imageName') imageName:any;

  @ViewChild('content') content:ElementRef;
  @ViewChild('imageProfile') imageProfile:ElementRef;
  @ViewChild('spanTitle') spanTitle:ElementRef;
  @ViewChild('spanCommunity') spanCommunity:ElementRef;
  @ViewChild('spanSubtitle') spanSubtitle:ElementRef;
  @ViewChild('buttonSearch') buttonSearch:any;

  private imageUrl: string = 'url(../assets/images/header-view/';
  fixedNameCommunity:string = "Community,";

  constructor(public renderer: Renderer) {
  }

  ngAfterViewInit(){
    if (this.imageName){
      this.configureHeaderTitleImage();
    }else{
      this.configureHeaderTitle();
    }

    if(this.subtitle){
      this.configureHeaderSubtitle();
    }else{
      this.hiddenHeaderSubtitle();
    }
  }

  configureHeaderTitleImage(){
    this.imageUrl = this.imageUrl + this.imageName + ')';
    this.renderer.setElementStyle(this.imageProfile.nativeElement, "backgroundImage", this.imageUrl);
  }

  configureHeaderTitle(){
    this.renderer.setElementStyle(this.content.nativeElement, "height", "20.23vh");
    this.renderer.setElementStyle(this.imageProfile.nativeElement, "visibility", "hidden");
  }

  configureHeaderSubtitle(){
    this.renderer.setElementStyle(this.spanTitle.nativeElement, "font-size", "6.6vw");
    this.renderer.setElementStyle(this.spanSubtitle.nativeElement, "font-size", "6.6vw");
  }
  hiddenHeaderSubtitle(){
    this.renderer.setElementStyle(this.buttonSearch._elementRef.nativeElement, "visibility", "hidden");
    this.renderer.setElementStyle(this.spanCommunity.nativeElement, "visibility", "hidden");
    this.renderer.setElementStyle(this.spanSubtitle.nativeElement, "visibility", "hidden");
  }

}
