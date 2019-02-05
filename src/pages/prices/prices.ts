import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams,Events, Content } from 'ionic-angular';
import { ProductServiceProvider } from '../../providers/product-service/product-service';

/**
 * Generated class for the PricesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-prices',
  templateUrl: 'prices.html',
})
export class PricesPage {

  @ViewChild('content') content: Content 
  lavages: any;
  pressings: any;
  ironings: any;
  shoemakers: any;
  retouches: any; 
  tarifs: Array<{ images: string, title: string, text: string, idDetail: string }>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public events: Events,  private lave: ProductServiceProvider) {
  }

  ionViewDidLoad() {
    let lavage = this.lave.loadPrices();
    console.log(lavage);
    Promise.all([lavage]).then((result) => {
      this.lavages = result[0].lavage;
      console.log(this.lavages);
    });
    let pressing = this.lave.loadPrices();
    Promise.all([pressing]).then((result) => {
      this.pressings = result[0].pressing;
      console.log(this.pressings);
    });
    let ironing = this.lave.loadPrices();
    Promise.all([ironing]).then((result) => {
      this.ironings = result[0].ironing;
      console.log(this.ironings);
    });
    let retouch = this.lave.loadPrices();
    Promise.all([retouch]).then((result) => {
      this.retouches = result[0].retouch;
      console.log(this.retouches);
    });
    let shoemaker = this.lave.loadPrices();
    Promise.all([shoemaker]).then((result) => {
      this.shoemakers = result[0].shoemaker;
      console.log(this.shoemakers);
    });
    this.content.resize();
    console.log('ionViewDidLoad PricesPage');
    this.events.publish('hideHeader', { isHidden: false });
  }

}
