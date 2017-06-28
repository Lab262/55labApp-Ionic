import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BenefitModel } from "../../models/BenefitModel"

@Component({
  selector: 'page-benefits',
  templateUrl: 'benefits.html',
})
export class BenefitsPage {

  title:string = "Benefícios";
  imageName = "dummyImageHeader.jpeg";
  benefits:BenefitModel[] = new Array();

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ngOnInit(){
    this.setDummyData();
  }

  setDummyData(){
    var benefit1 = new BenefitModel("BE FREE","Seguro de vida",this.imageName, "Desconto de 30% no Seguros Bradesco");
    var benefit2 = new BenefitModel("PLANO ACADEMIA","Vida fitness",this.imageName, "Desconto de 15% na Academia 4e20");

    this.benefits.push(benefit1);
    //this.benefits.push(benefit2);
  }

}
