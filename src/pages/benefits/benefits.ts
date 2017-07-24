import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BenefitModel } from "../../models/BenefitModel"
import { TypeBenefitModel } from "../../models/TypeBenefitModel"

@Component({
  selector: 'page-benefits',
  templateUrl: 'benefits.html',
})
export class BenefitsPage {

  title:string = "Benefícios";
  imageName = "dummyImageHeader.jpeg";
  benefits:BenefitModel[] = new Array();
  typesBenefit:TypeBenefitModel[] = new Array();

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ngOnInit(){
    this.setDummyData();
  }

  setDummyData(){
    var typeBenefit1 = new TypeBenefitModel("Plano de Saúde");
    var typeBenefit2 = new TypeBenefitModel("Vida Fitness");
    var typeBenefit3 = new TypeBenefitModel("Estudos");


    var benefit1 = new BenefitModel("BE FREE",typeBenefit1,this.imageName, "Desconto de 30% no Seguros Bradesco", "As we grow, we do so in fits and starts, lurching forward then back, sometimes looking more like clowns than seekers. Winston Churchill wrote: “Man will occasionally stumble over the truth, but most of");
    var benefit2 = new BenefitModel("PLANO ACADEMIA",typeBenefit2,this.imageName, "Desconto de 15% na Academia 4e20", "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.");
    var benefit3 = new BenefitModel("CURSO DE INGLÊS",typeBenefit3,this.imageName, "Desconto de 35% na Cultura Inglesa", "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.");

    this.benefits.push(benefit1);
    this.benefits.push(benefit2);
    this.benefits.push(benefit3);

    this.typesBenefit.push(typeBenefit1);
    this.typesBenefit.push(typeBenefit2);
    this.typesBenefit.push(typeBenefit3);
  }

}
