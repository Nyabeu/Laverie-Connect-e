import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController,Content,Events } from 'ionic-angular';
//import { AngularFireAuth } from 'angularfire2/auth';



import { ProductServiceProvider } from '../../providers/product-service/product-service';
import { ShoppingPage } from '../shopping/shopping';
import { HomePage } from '../../pages/home/home';
import { AccountPage } from '../../pages/account/account';
import { SearchPage } from '../../pages/search/search';
import { LoginPage } from '../../pages/login/login';

/**
 * Generated class for the WashingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-washing',
  templateUrl: 'washing.html',
})
export class WashingPage {

  @ViewChild('content') content: Content
  lavages: any;
  mesCommandes: 0;

  constructor(public navCtrl: NavController, public navParams: NavParams, private pressing: ProductServiceProvider,
    private events: Events, private toast: ToastController) {
  }

  addItem(eltObj) {
    this.pressing.addItem(eltObj);
    this.mesCommandes = this.pressing.getNbCommandes();
  }
  removeItem(eltObj) {
    this.pressing.removeItem(eltObj);
    this.mesCommandes = this.pressing.getNbCommandes();
  }
  openShopping(){
    this.navCtrl.push(ShoppingPage);
  }
  
  ionViewDidLoad() {
    let pressing = this.pressing.load();
    Promise.all([pressing]).then((result) => {
      this.lavages = result[0].pressing;
    });
    this.content.resize();
    this.events.publish('hideHeader', { isHidden: false });
  }

}
