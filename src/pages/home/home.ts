import { Component, ViewChild } from '@angular/core';
import { NavController,Events,AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { User } from '../../models/user';


import { LoginPage } from '../../pages/login/login';
import { PricesPage } from '../../pages/prices/prices';
import { ConciergePage } from '../../pages/concierge/concierge';
import { ConnectAvailabilityMachinePage } from '../../pages/connect-availability-machine/connect-availability-machine';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  user = {} as User;
  firebase:any;
  usernotfound: boolean;


  constructor(public navCtrl: NavController,public events: Events,public alertCtrl: AlertController, private afAuth: AngularFireAuth) {
    events.publish('hideHeader', { isHidden: true });
  }

  openLoginPage() {
    this.navCtrl.push(LoginPage);
  }
  openPricePage() {
    this.navCtrl.push(PricesPage);
  }
  openDisponibilitePage() {
    this.navCtrl.push(ConnectAvailabilityMachinePage);
  }
  openConciergePage() {
    this.presentPrompt(this.user);
  }
  presentPrompt(user: User) {
    let alert = this.alertCtrl.create({
      title: `<h1 style="text-align: center">Connexion</h1>`,
      inputs: [
        {
          name: 'user.email',
          placeholder: 'Entrez votre email'
        },
        {
          name: 'user.password',
          placeholder: 'Entrez votre password',
          type: 'password'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
            this.navCtrl.setRoot(HomePage);
          }
        },
      {
          text: 'Login',
          handler: user => {
/*              if (this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password)) {
              this.navCtrl.setRoot(ConciergePage);
              this.usernotfound = false;
             } else {
              this.usernotfound = true;
           } */
            this.navCtrl.push(ConciergePage);
          }
        }
      ]
    });
    alert.present();
  }

  

}
