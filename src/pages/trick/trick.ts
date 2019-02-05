import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Content,Events } from 'ionic-angular';

/**
 * Generated class for the TrickPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-trick',
  templateUrl: 'trick.html',
})
export class TrickPage {

  @ViewChild('content') content: Content

  constructor(public navCtrl: NavController, public navParams: NavParams,public events: Events) {
  }

  ionViewDidLoad() {
    this.content.resize();
    this.events.publish('hideHeader', { isHidden: false });
    console.log('ionViewDidLoad TrickPage');
  }

}
