import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Events, Content } from 'ionic-angular';
//import { trigger, state, style, transition, animate } from '@angular/animations'

/**
 * Generated class for the AccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-account',
  templateUrl: 'account.html',
/*   animations: [
    trigger('toggleState', [
      state('true', style({})),
      state('false', style({ maxHeight: 0, padding: 0, display: 'none' })),
      // transition
      transition('* => *', animate('300ms'))
    ])
  ] */
})
export class AccountPage {

  @ViewChild('content') content: Content
/*   flyInOutState: String = 'out';
  shouldToggle1 = false;
  shouldToggle2 = false;
  shouldToggle3 = false;
  shouldToggle4 = false; */

  constructor(public navCtrl: NavController, public navParams: NavParams, public events: Events) {
  }

  ionViewDidLoad() {
    this.content.resize();
    console.log('ionViewDidLoad AccountPage');
    this.events.publish('hideHeader', { isHidden: false });
  }
  // handleClick1() {
  //   this.shouldToggle1 = !this.shouldToggle1;
  // }
  // handleClick2() {
  //   this.shouldToggle2 = !this.shouldToggle2;
  // }
  // handleClick3() {
  //   this.shouldToggle3 = !this.shouldToggle3;
  // }
  // handleClick4() {
  //   this.shouldToggle4 = !this.shouldToggle4;
  // }

}
