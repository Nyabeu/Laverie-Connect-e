import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams,Events,LoadingController,ToastController, Content } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

//import { RegisterPage } from '../../pages/register/register';
import { HomePage } from '../../pages/home/home';
import { WashingPage } from '../../pages/washing/washing';
import { User } from '../../models/user';
import { RegisterPage } from '../../pages/register/register';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  
  @ViewChild('content') content: Content
  user = {} as User;
  firebase:any;
  usernotfound: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams,public events: Events,
    private afAuth: AngularFireAuth, private toast: ToastController, private loading: LoadingController) {
  }

async login(user: User) {
  var that = this;
  var loaded = this.loading.create({
    spinner: 'hide',
    content: `
      <div class="custom-spinner-container">
        <div class="custom-spinner-box">Bienvenue ${user.email}<br>Vous êtez bien connecté</div>
      </div>`,
    duration: 5000
  });
  loaded.present();
  try {
    const result = this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password);
    if (result) {
      setTimeout(() => {
        loaded.dismiss();
      }, 3000);
      this.navCtrl.setRoot(HomePage);
      this.usernotfound = false;
    } else {
      this.usernotfound = true;
    }

  }
  catch (e) {
    let toast = this.toast.create({
      message: `Vous êtes pas authentifier`,
      duration: 3000,
      position: 'top'
    });
    toast.present();
    that.user.password = "";
    console.error(e);
  }
}
registerUser(){
  this.navCtrl.push(RegisterPage);
}
ionViewDidLoad() {
  this.content.resize();
  this.events.publish('hideHeader', { isHidden: false });
}

}
