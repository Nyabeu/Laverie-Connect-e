import { Component, ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams, Events, Content } from 'ionic-angular';

/**
 * Generated class for the SponsorshipPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sponsorship',
  templateUrl: 'sponsorship.html',
})
export class SponsorshipPage { 

  @ViewChild('content') content: Content

  constructor(public navCtrl: NavController, public navParams: NavParams,public events: Events) {
  }

  ionViewDidLoad() {
    this.content.resize();
    console.log('ionViewDidLoad SponsorshipPage');
    this.events.publish('hideHeader', { isHidden: false });
  }

}
