import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams,Content, Events } from 'ionic-angular';
import { ProductServiceProvider } from '../../providers/product-service/product-service';


import { ShoppingPage } from '../shopping/shopping';

/**
 * Generated class for the RetouchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-retouch',
  templateUrl: 'retouch.html',
})
export class RetouchPage {

  @ViewChild('content') content: Content
  retouches: any;
  mesCommandes: 0;

  constructor(public navCtrl: NavController, public navParams: NavParams, public events: Events,
    private retouch: ProductServiceProvider) {
  }
  ionViewDidLoad() {
    let retouch = this.retouch.load();
    Promise.all([retouch]).then((result) => {
      this.retouches = result[0].retouch;
    });
    this.content.resize();
    this.events.publish('hideHeader', { isHidden: false });
  }

  addItem(eltObj) {
    console.log(eltObj);
    this.retouch.addItem(eltObj);
    this.mesCommandes = this.retouch.getNbCommandes();
  }
  removeItem(eltObj) {
    this.retouch.removeItem(eltObj);
    this.mesCommandes = this.retouch.getNbCommandes();
  }
  openShopping() {
    this.navCtrl.push(ShoppingPage);
  }

}
