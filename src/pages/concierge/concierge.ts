import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams,Events,Content,AlertController } from 'ionic-angular';
import { ProductServiceProvider } from '../../providers/product-service/product-service';


import { ContactPage } from '../contact/contact';
import { IroningPage } from '../ironing/ironing';
import { DeliveryPage } from '../delivery/delivery';
import { WashingPage } from '../washing/washing';
import { TrickPage } from '../trick/trick';
import { RetouchPage } from '../retouch/retouch';
import { RegisterPage } from '../../pages/register/register';
import { HomePage } from '../../pages/home/home';
import { AccountPage } from '../../pages/account/account';
import { ShoppingPage } from '../../pages/shopping/shopping';
import { SearchPage } from '../../pages/search/search';
import { LoginPage } from '../../pages/login/login';
import { ShoeMakerPage } from '../../pages/shoe-maker/shoe-maker';
/**
 * Generated class for the ConciergePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-concierge',
  templateUrl: 'concierge.html',
})
export class ConciergePage {
  @ViewChild('content') content: Content
  selectedItem: any;
  mesCommandes: 0;
  items: Array<{ image: string, title: string, text: string, component: any }>; 

  constructor(public navCtrl: NavController, public navParams: NavParams,public myAlert: AlertController,
    private pressing: ProductServiceProvider, public events: Events) {
    this.selectedItem = navParams.get('item');
    this.getItems();
  }
  getItems() {
    this.items = [
      { image: './assets/imgs/PRESSING.png', title: 'Pressing', text: 'Trouvez vos services préféres', component: WashingPage },
      { image: './assets/imgs/REPASSAGE.png', title: 'Repassage', text: 'Plus un seul pli', component: IroningPage },
      { image: './assets/imgs/RETOUCHE.png', title: 'Retouche', text: 'Ourlet parfait et autres réparations', component: RetouchPage },
      { image: './assets/imgs/COORDONNERIE.png', title: 'Cordonnerie', text: 'Prenez soin de vos chaussures', component: ShoeMakerPage },
      { image: './assets/imgs/COLISP.png', title: 'Service Relais', text: '( poste, colis )', component: TrickPage },
      { image: './assets/imgs/DEPLACEMENT.png', title: 'Loisirs', text: '( Voyage, Théâtre, billeterie )', component: ContactPage },
      { image: './assets/imgs/ADMINISTRATIF.png', title: 'Démarches Administratives', text: '( CAF, Préfecture ) ', component: ContactPage },
      { image: './assets/imgs/RECYCLAGE.png', title: 'Don / Recyclage', text: '', component: TrickPage },
      //{ image: './assets/imgs/COLISP.png', title: 'Collecte / Livraison', text: '', component: DeliveryPage },
      { image: './assets/imgs/KDO.png', title: 'Vie Courante', text: '( Achat, Cadeaux )', component: ContactPage },
      { image: './assets/imgs/BIENETRE.png', title: 'Bien Être', text: '', component: ContactPage },
      { image: './assets/imgs/ENTRETIEN.png', title: 'Entretien automobile', text: '', component: ContactPage },
      { image: './assets/imgs/COLISP.png', title: 'Devis professionnels', text: '', component: ContactPage }
    ];
  }
  itemTapped(item) {
    if (item.component === ContactPage) {
      this.showAlert(item);
      this.navCtrl.push(item.component);
    }else{
      this.navCtrl.push(item.component);
    }
  }
  ionViewDidLoad() {
    this.content.resize();
    console.log('ionViewDidLoad ConciergePage');
    this.events.publish('hideHeader', { isHidden: false });
  }

    showAlert(totot) {
    if (totot.title === 'Démarches Administratives') {
      const alert = this.myAlert.create({
        title: 'Démarches Administratives',
        subTitle: totot.text,
        message: 'Pour plus information, contactez-nous.',
        buttons: ['OK']
      });
      alert.present();
    } else if (totot.title === 'Loisirs') {
      const alert = this.myAlert.create({
        title: 'Loisirs',
        subTitle: totot.text,
        message: 'Pour plus d\' informations, contactez-nous.',
        buttons: ['OK']
      });
      alert.present();
    } else if (totot.title === 'Bien Être') {
      const alert = this.myAlert.create({
        title: 'Bien Être',
        subTitle: totot.text,
        message: 'Pour plus d\' informations, contactez-nous',
        buttons: ['OK']
      });
      alert.present();
    } else if (totot.title === 'Devis professionnels') {
      const alert = this.myAlert.create({
        title: 'Devis professionnels',
        subTitle: totot.text,
        message: 'Pour plus d\' informations, contactez-nous.',
        buttons: ['OK']
      });
      alert.present();
    } else if (totot.title === 'Entretien automobile') {
      const alert = this.myAlert.create({
        title: 'Entretien automobile',
        subTitle: totot.text,
        message: 'Pour plus d\' informations, contactez-nous.',
        buttons: ['OK']
      });
      alert.present();
    } else if (totot.title === 'Vie Courante') {
      const alert = this.myAlert.create({
        title: 'Vie Courante',
        subTitle: totot.text,
        message: 'Pour plus d\' informations, contactez-nous.',
        buttons: ['OK']
      });
      alert.present();
    }else{}

  }
  addItem(eltObj) {
    this.pressing.addItem(eltObj);
    this.mesCommandes = this.pressing.getNbCommandes();
  }
  removeItem(eltObj) {
    this.pressing.removeItem(eltObj);
    this.mesCommandes = this.pressing.getNbCommandes();
  }
    // call page open
    registerPage() {
      this.navCtrl.push(RegisterPage);
    }

}
