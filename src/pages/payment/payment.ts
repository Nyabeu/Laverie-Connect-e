import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Events, Content } from 'ionic-angular';
import { CarteBlue } from '../../models/carteBlue';
import { AngularFireAuth } from 'angularfire2/auth';



import { CreditedMyAccountPage } from '../../pages/credited-my-account/credited-my-account';
/**
 * Generated class for the PaymentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-payment',
  templateUrl: 'payment.html',
})
export class PaymentPage {

  @ViewChild('content') content: Content
  carte = {} as CarteBlue;

  constructor(public navCtrl: NavController, public navParams: NavParams,public afAuth: AngularFireAuth, public events: Events ) {
  }
  async payment(carte: CarteBlue) {
    try {
     const result = await this.afAuth.auth
     // .then(()=> {
     //   addEventListener: user.firstname, user.name, user.username, user.confirm_password
     // }).catch(e){
     //   console.error(e.message)
     // }
     ;
     
     if(result){
       //console.log(user.email);
       this.navCtrl.push(CreditedMyAccountPage);
     }
     console.log(result);
   }
   catch (e) {
     console.error(e.message);
   } 
  }
  ionViewDidLoad() {
    this.content.resize();
    console.log('ionViewDidLoad PaymentPage');
    this.events.publish('hideHeader', { isHidden: false });
  }

}
