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
    var benefit1 = new BenefitModel("BE FREE","Seguro de vida",this.imageName);
    var benefit2 = new BenefitModel("ACADEMIA 4e20","Vida fitness",this.imageName);

    this.benefits.push(benefit1);
    this.benefits.push(benefit2);
  }

}
