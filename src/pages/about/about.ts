import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams,Events, Content } from 'ionic-angular';

/**
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {

  @ViewChild('content') content: Content

  constructor(public navCtrl: NavController, public navParams: NavParams,public events: Events) {
  }

  ionViewDidLoad() {
    this.content.resize();
    console.log('ionViewDidLoad AboutPage');
    this.events.publish('hideHeader', { isHidden: false });
  }

}
