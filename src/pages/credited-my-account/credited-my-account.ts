import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Events, Content } from 'ionic-angular';


import { HomePage } from '../../pages/home/home';
import { DeliveryPage } from '../../pages/delivery/delivery';
import { RegisterPage } from '../register/register';
/**
 * Generated class for the CreditedMyAccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-credited-my-account',
  templateUrl: 'credited-my-account.html',
})
export class CreditedMyAccountPage {

  @ViewChild('content') content: Content
  moneyP: Array<{ price: string, id: string}>;
  moneyG: Array<{ price: string, id: string}>;
  getClickedMoney: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public events: Events) {
    this.getMoney();
    this.getClickedMoney = "";
  }

  getMoney() {
    this.moneyP = [
      { price: '5 €', id:"1"},
      { price: '10 €', id:"2"},
      { price: '20 €', id:"3"},
      { price: '30 €', id:"4"},
      { price: '40 €', id:"5"},
    ];
    this.moneyG = [
      { price: '50 €', id:"6"},
      { price: '100 €', id:"7"},
      { price: '150 €', id:"8"},
      { price: '200 €', id:"9"},
      { price: '250 €', id:"10"},
    ];
  }
  eachMoney(p){
    this.getClickedMoney = p;
  }
  openHomepage(toto){
    if(toto == HomePage){
      this.navCtrl.setRoot(HomePage);
      console.log('hello');
    }else{
      this.navCtrl.push(DeliveryPage);
    }
 
  }
    
  ionViewDidLoad() {
    this.content.resize();
    console.log('ionViewDidLoad CreditedMyAccountPage');
    this.events.publish('hideHeader', { isHidden: false });
  }


}
