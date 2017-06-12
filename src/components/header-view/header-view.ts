import { Component, Input, ElementRef, ViewChild, Renderer} from '@angular/core';

@Component({
  selector: 'header-view',
  templateUrl: 'header-view.html'
})
export class HeaderViewComponent {

  @Input('title') title: any;
  @Input('imageName') imageName:any;

  @ViewChild('imageProfile') imageProfile:ElementRef;

  private imageUrl: string = 'url(../assets/images/';

  constructor(public renderer: Renderer) {
  }

  ngAfterViewInit(){
    //Revisar essa gambira do if de boolean
    if (this.imageName){
      this.configureHeaderTitleImage();
    }else{
      this.configureHeaderTitle();
    }
  }

  configureHeaderTitleImage(){
    this.imageUrl = this.imageUrl + this.imageName + ')';
    this.renderer.setElementStyle(this.imageProfile.nativeElement, "visibility", "visible");
    this.renderer.setElementStyle(this.imageProfile.nativeElement, "backgroundImage", this.imageUrl);
  }

  configureHeaderTitle(){
    this.renderer.setElementStyle(this.imageProfile.nativeElement, "visibility", "hidden");
  }

}
