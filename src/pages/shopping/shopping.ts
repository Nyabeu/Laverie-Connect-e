import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams,Content, Events,ToastController } from 'ionic-angular';
import { ProductServiceProvider } from '../../providers/product-service/product-service';


import { DeliveryPage } from '../../pages/delivery/delivery';
import { ConciergePage } from '../concierge/concierge';
/**
 * Generated class for the ShoppingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-shopping',
  templateUrl: 'shopping.html',
})
export class ShoppingPage {

  @ViewChild('content') content: Content
  listCourse: any;
  totalCourse: any;
  mesCommandes: any = 0;
  shoppings: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public events: Events,
    private shopping: ProductServiceProvider,private toastCtrl: ToastController) {
  }

  getTotal() {
    this.totalCourse = this.shopping.getCalculTotal();
  }
  
  getListCourse() {
    this.listCourse = this.shopping.getListShopping();
  }
  ionViewDidLoad() {

    this.getListCourse();
    this.getTotal();
    let pressing = this.shopping.load();
    Promise.all([pressing]).then((result) => {
      this.shoppings = result[0];
    });
    this.content.resize();
    this.events.publish('hideHeader', { isHidden: false });

  }

  addItem(eltObj) {
    this.shopping.addItem(eltObj);
    this.mesCommandes = this.shopping.getNbCommandes();
    this.getTotal();
  }
  removeItem(eltObj) {
    this.shopping.removeItem(eltObj);
    this.mesCommandes = this.shopping.getNbCommandes();
    this.getTotal();
  }
  openConcierge() {
     this.navCtrl.push(ConciergePage);
  }
  openDeliverypage() {
    this.navCtrl.push(DeliveryPage)
  }

  emptyBasket(eltObj){ 
  this.shopping.emptyBasket(eltObj) ;
  this.getTotal();
  }

  presentToast(toto) {
    let toast = this.toastCtrl.create({
      message: "Bienvenue !!!!",
      duration: 3000,
      position: 'top'
    });
  
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
  
    toast.present();
  }


}
