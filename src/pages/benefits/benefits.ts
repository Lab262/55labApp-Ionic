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
    var benefit1 = new BenefitModel("BE FREE","Seguro de vida",this.imageName, "Desconto de 30% no Seguros Bradesco", "As we grow, we do so in fits and starts, lurching forward then back, sometimes looking more like clowns than seekers. Winston Churchill wrote: “Man will occasionally stumble over the truth, but most of");
    var benefit2 = new BenefitModel("PLANO ACADEMIA","Vida fitness",this.imageName, "Desconto de 15% na Academia 4e20", "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.");

    this.benefits.push(benefit1);
    this.benefits.push(benefit2);
  }

}
