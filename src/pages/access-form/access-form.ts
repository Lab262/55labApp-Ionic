import { Component } from '@angular/core';
import { Loading, LoadingController, NavController, NavParams, AlertController } from 'ionic-angular';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ParseProvider } from '../../providers/parse/parse'
import { TabsPage } from '../tabs/tabs';

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

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public formBuilder: FormBuilder,
    public parseProvider: ParseProvider) {

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

  backPage(){
    this.navCtrl.pop({animation: 'ios-back-transition'});
  }

  login(){
    if (!this.loginForm.valid){
      console.log(this.loginForm.value);
    } else {
      this.parseProvider.loginUser(this.loginForm.value.cpf,
          this.loginForm.value.password)
      .then( success => {
        this.loading.dismiss().then( () => {
          this.navCtrl.setRoot(TabsPage);
        });
      }, error => {
        this.loading.dismiss().then( () => {
          let alert = this.alertCtrl.create({
            message: error.message,
            buttons: [
              {
                text: "Ok",
                role: 'cancel'
              }
            ]
          });
          alert.present();
        });
      });
      this.loading = this.loadingCtrl.create();
      this.loading.present();
    }
  }

}
