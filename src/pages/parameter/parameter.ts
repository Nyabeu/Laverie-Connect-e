import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Events, Content } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';


import { OrderPage } from '../order/order';
import { AccountPage } from '../account/account';
import { SponsorshipPage } from '../sponsorship/sponsorship';
import { HelpPage } from '../help/help';
import { HomePage } from '../home/home';
import { ContactPage } from '../contact/contact';
import { LoginPage } from '../login/login';
import { SearchPage } from '../search/search';
import { TrickPage } from '../trick/trick';

/**
 * Generated class for the ParameterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-parameter',
  templateUrl: 'parameter.html',
})
export class ParameterPage {

  @ViewChild('content') content: Content                                                                                                                                          
  myphotos: any;
  base64Image: string;
  image: boolean;
  buttonActive: boolean = true;
  selectedItem: any;
  items: Array<{ title: string, icon: string, component: any }>;
  IconImage: boolean = true;

constructor(public navCtrl: NavController, public navParams: NavParams, private camera: Camera, public events: Events) {
    this.selectedItem = navParams.get('item');
    this.items = [
      { title: 'Mon compte', icon: 'key', component: AccountPage },
      { title: 'Mes commandes', icon: 'trash', component: OrderPage },
      { title: 'Mes recherches', icon: 'search', component: SearchPage },
      { title: 'Mes avis', icon: 'eye', component: TrickPage },
      { title: 'Parrainage(15 € offerts)', icon: 'logo-euro', component: SponsorshipPage },
      { title: 'Aide et Contact', icon: 'help', component: HelpPage },
    ];
  }

  itemTapped(item) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.navCtrl.push(item.component);
  }
  takePhoto() {
    const options: CameraOptions = {
      quality: 70,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64:
      this.myphotos = 'data:image/jpeg;base64,' + imageData;
      //this.myphotos.push(this.base64Image);
      //this.myphotos.reverse();
    }, (err) => {
      // Handle error
    });
  }

  ionViewDidLoad() {
    this.content.resize();
    console.log('ionViewDidLoad ParameterPage');
    this.events.publish('hideHeader', { isHidden: false });
  }

}
