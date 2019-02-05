import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams,Content,Events } from 'ionic-angular';

/**
 * Generated class for the ContactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})
export class ContactPage {

  @ViewChild('content') content: Content 
  checked: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams,public events: Events) {
  }

  updateChecked() {
    console.log('Checked new state:' + this.checked);
  } 
  
  ionViewDidLoad() {
    this.content.resize();
    this.events.publish('hideHeader', { isHidden: false });
    console.log('ionViewDidLoad ContactPage');
  }

}
