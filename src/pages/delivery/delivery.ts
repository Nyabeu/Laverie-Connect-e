import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Events, DateTime, Content, ToastController } from 'ionic-angular';
import { ProductServiceProvider } from '../../providers/product-service/product-service';

import { PaymentPage } from '../../pages/payment/payment';
/**
 * Generated class for the DeliveryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-delivery',
  templateUrl: 'delivery.html',
})
export class DeliveryPage {


  @ViewChild('content') content: Content
  horaire: string = '';
  date: DateTime;
  totalCourse: any;
  myDate: String;
  options: Array<{ value: string, id: string }>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private toast: ToastController,
    private shopping: ProductServiceProvider, public events: Events) {
    this.getOption();
    this.myDate = new Date().toISOString();;
  }
  getOption() {
    this.options = [
      { value: "07h - 09h", id: "1" },
      { value: "09h 30min - 11h", id: "2" },
      { value: "11h 30 - 12h 45min", id: "3" },
      { value: "13h - 15h", id: "4" },
      { value: "15h 15min - 16h 30min", id: "5" },
      { value: "17h - 19h", id: "6" },
      { value: "19h - 20h 30min", id: "7" },
      { value: "21h - 22h 30min", id: "8" }
    ]
  }
  openPaymentPage() {
    this.navCtrl.push(PaymentPage);
  }
  ionViewDidLoad() {
    this.getTotal();
    this.content.resize();
    console.log('ionViewDidLoad DeliveryPage');
    this.events.publish('hideHeader', { isHidden: false });

  }
  getTotal() {
    this.totalCourse = this.shopping.getCalculTotal();
  }
  show() {
    this.presentToast();
  }
  presentToast() {
    const toast = this.toast.create({
      message: 'Un email de confirmation vous sera envoyé',
      position: 'top',
      duration: 3000
    });
    toast.present();
  }


}
