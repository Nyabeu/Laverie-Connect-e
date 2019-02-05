import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AvailabilityPage } from '../../pages/availability/availability';
import { MachineDetailPage } from '../../pages/machine-detail/machine-detail';
/**
 * Generated class for the ConnectAvailabilityMachinePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-connect-availability-machine',
  templateUrl: 'connect-availability-machine.html',
})
export class ConnectAvailabilityMachinePage {

  tab1Root: any = AvailabilityPage;
  tab2Root: any = MachineDetailPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConnectAvailabilityMachinePage');
  }

}
