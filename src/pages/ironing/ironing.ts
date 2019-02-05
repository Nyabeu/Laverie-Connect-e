import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams,Events,Content } from 'ionic-angular';
import { PricesPage } from '../prices/prices';
import { AvailabilityPage } from '../availability/availability';
import { ShoppingPage } from '../shopping/shopping';
import { ProductServiceProvider } from '../../providers/product-service/product-service';

/**
 * Generated class for the IroningPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ironing',
  templateUrl: 'ironing.html',
})
export class IroningPage { 

  @ViewChild('content') content: Content 
  repassages: any;
  mesCommandes: 0;

  constructor(public navCtrl: NavController, public navParams: NavParams,public events: Events,private repasse: ProductServiceProvider) {
  }

  ionViewDidLoad() {
    let repasse = this.repasse.load();
    Promise.all([repasse]).then((result) => {
      this.repassages = result[0].ironing;
    });
    this.content.resize();
    this.events.publish('hideHeader', { isHidden: false });
  }

  addItem(eltObj) {
    this.repasse.addItem(eltObj);
    this.mesCommandes = this.repasse.getNbCommandes();
  }
  removeItem(eltObj) {
    this.repasse.removeItem(eltObj);
    this.mesCommandes = this.repasse.getNbCommandes();
  }
  openShopping() {
    this.navCtrl.push(ShoppingPage);
  }


}
