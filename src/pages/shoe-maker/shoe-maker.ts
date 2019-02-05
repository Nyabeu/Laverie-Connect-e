import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams,Content, Events } from 'ionic-angular';
import { ProductServiceProvider } from '../../providers/product-service/product-service';

import { ShoppingPage } from '../shopping/shopping';
/**
 * Generated class for the ShoeMakerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-shoe-maker',
  templateUrl: 'shoe-maker.html',
})
export class ShoeMakerPage {

  @ViewChild('content') content: Content
  coordonneries: any;
  mesCommandes: 0;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public events: Events,private coord: ProductServiceProvider) {
  }

  ionViewDidLoad() {
    let shoe = this.coord.load();
    Promise.all([shoe]).then((result) => {
      this.coordonneries = result[0].shoemaker;
    });
    this.content.resize();
    this.events.publish('hideHeader', { isHidden: false });
  }

  addItem(eltObj) {
    this.coord.addItem(eltObj);
    this.mesCommandes = this.coord.getNbCommandes();
  }
  removeItem(eltObj) {
    this.coord.removeItem(eltObj);
    this.mesCommandes = this.coord.getNbCommandes();
  }
  openShopping() {
    this.navCtrl.push(ShoppingPage);
  }



}
