import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AccessFormPage } from '../access-form/access-form';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  title:string = "Seja Bem vindo a nossa +55lab.";
  subtitle:string = "Community";
  description:string = "Em nossa Rede você ainda poderá explorar todos os benefícios de participar da Network +55Lab.co.";
  buttonFirstAccessTitle:string = "Primeiro Acesso";
  buttonLoginTitle:string = "Login";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  callLoginPage(){
    this.callAccessFormPage(false);
  }

  callRegisterPage(){
    this.callAccessFormPage(true);
  }

  callAccessFormPage(valueBool: boolean){
    this.navCtrl.push(AccessFormPage,{isFormRegister: valueBool},{animation: 'ios-transition'});
  }
}
