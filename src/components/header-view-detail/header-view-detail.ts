import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'header-view-detail',
  templateUrl: 'header-view-detail.html'
})
export class HeaderViewDetailComponent {

  titleButtonBack:string = "Voltar";
  titleHeader:string = "Solicitar Benefício";

  constructor(public navCtrl: NavController) {
  }

  backPage(){
    this.navCtrl.pop({animation: 'ios-back-transition'});
  }

}
