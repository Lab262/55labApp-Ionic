import { Component, Input} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'page-benefit-detail',
  templateUrl: 'benefit-detail.html',
})
export class BenefitDetailPage {

  benefit:any;

  public requestBenefitForm:FormGroup;

  placeholderName = "Seu Nome:"
  placeholderEmail = "Seu email:"
  placeholderPhoneNumber = "Telefone:"
  placeholderInterest = "Gostaria de assinar e começar a aproveitar esse benefício..."
  titleInterest = "Qual é o seu interesse pelo benefício?"
  titleButtonRequest = "Solicitar"

  //TODO: Change informations from real data
  dummyName = "Vanessa Raulino"
  dummyEmail = "vanessa@lab262.com"
  dummyPhoneNumber = "00000-0000"

  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder) {
    this.benefit = navParams.get("benefit");
    this.buildRequestBenefitForm();
  }

  buildRequestBenefitForm(){
    this.requestBenefitForm = this.formBuilder.group({
      name: ['', Validators.compose([Validators.required,
        Validators.minLength(3)])],
      email: ['', Validators.compose([Validators.required,
            Validators.minLength(4)])],
      phoneNumber: ['', Validators.compose([Validators.minLength(8),
        Validators.required])],
      interest: ['', Validators.compose([Validators.required,
              Validators.minLength(3)])]
    });
  }

  requestBenefit(){

  }

}
