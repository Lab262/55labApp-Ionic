import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  title:string = "Seja Bem vindo a nossa Community";
  description:string = "Em nossa Rede você ainda poderá explorar todos os benefícios de participar da Network +55Lab.co.";
  buttonFirstAccessTitle:string = "Primeiro Acesso";
  buttonLoginTitle:string = "Login";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
