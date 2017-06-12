import { Component, Input } from '@angular/core';

@Component({
  selector: 'header-view',
  templateUrl: 'header-view.html'
})
export class HeaderViewComponent {

  @Input('title') title: any;
  @Input('haveImage') haveImage: boolean;
  @Input('imageName') imageName: any = "default-profile.jpeg";


  private imageUrl: string = 'url(../assets/images/';
  private marginTopTitle = "9.7vh";
  private marginTopTitleImage = "1.5vh";
  private imageElement:HTMLElement;
  private titleElement:HTMLElement;

  constructor() {
  }

  ngAfterViewInit() {
    this.imageElement = document.getElementById("imageProfile");
    this.titleElement = document.getElementById("title");

    //Revisar essa gambira do if de boolean
    if (String(this.haveImage)==String(true)){
      this.configureHeaderTitleImage();
    }else{
      this.configureHeaderTitle();
    }
  }

  configureHeaderTitle(){
    this.imageElement.style.display = "none";
    this.titleElement.style.marginTop = this.marginTopTitle;
  }

  configureHeaderTitleImage(){
    this.imageElement.style.display = "block";
    this.imageUrl = this.imageUrl + this.imageName + ')';
    this.imageElement.style.backgroundImage = this.imageUrl;
    this.titleElement.style.marginTop = this.marginTopTitleImage;
  }


}
