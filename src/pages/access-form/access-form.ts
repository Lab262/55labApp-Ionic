import { Component } from '@angular/core';
import { Loading, LoadingController, NavController, NavParams, AlertController } from 'ionic-angular';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'page-access-form',
  templateUrl: 'access-form.html',
})
export class AccessFormPage {

  public loginForm:FormGroup;
  public loading:Loading;

  titleButtonBack:string = "Voltar";
  titleButtonForgotPassword:string = "Esqueceu a senha?";
  titleButtonLogin:string = "Login";
  titleButtonRegister:string = "Entrar";
  placeholderCPF:string = "CPF";
  placeholderEmail:string = "Email";
  placeholderPassword:string = "Senha";

  isFormRegister:boolean;

  navController:NavController;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public formBuilder: FormBuilder) {

    this.navController = navCtrl;
    this.isFormRegister = navParams.get("isFormRegister");
    this.buildLoginForm(formBuilder);

  }

  buildLoginForm(formBuilder:FormBuilder){
    if (this.isFormRegister) {
      this.loginForm = formBuilder.group({
        cpf: ['', Validators.compose([Validators.required,
          Validators.minLength(4)])],
        email: ['', Validators.compose([Validators.required,
              Validators.minLength(4)])],
        password: ['', Validators.compose([Validators.minLength(4),
          Validators.required])]
      });
    }else{
      this.loginForm = formBuilder.group({
        cpf: ['', Validators.compose([Validators.required,
          Validators.minLength(4)])],
        password: ['', Validators.compose([Validators.minLength(4),
          Validators.required])]
      });
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccessFormPage');
  }

  backPage(){
    this.navController.pop({animation: 'ios-back-transition'});
  }

}
