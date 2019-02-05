import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { User } from '../../models/user';

import { PaymentPage } from '../../pages/payment/payment';
import { AngularFireDatabase } from 'angularfire2/database';
/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  user = {} as User;
  constructor(public navCtrl: NavController, public navParams: NavParams,public events: Events,
    public afAuth: AngularFireAuth, private database: AngularFireDatabase) {
    
  }
  async register(user: User) {
    try {
     const result = await this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
     
     if(result){
       this.navCtrl.push(PaymentPage);
     }
     console.log(result);
   }
   catch (e) {
     console.error(e.message);
   } 

/*     this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password).then((result) => {
     this.navCtrl.push(CreditedMyAccountPage);
     console.log(result);
   }, (error) =>{
     console.log(error);
   }) */

   // logout() {
   //   this.afAuth
   //     .auth
   //     .signOut();
   // }

 }

 ionViewDidLoad() {
   console.log('ionViewDidLoad RegisterPage');
   this.events.publish('hideHeader', { isHidden: true });
 }


}
