import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Events, Content } from 'ionic-angular';



import { TrickPage } from '../../pages/trick/trick';
import { ConciergePage } from '../../pages/concierge/concierge';
import { SponsorshipPage } from '../../pages/sponsorship/sponsorship';
import { ShoppingPage } from '../../pages/shopping/shopping';
import { LoginPage } from '../../pages/login/login';
import { DeliveryPage } from '../../pages/delivery/delivery';
import { MachineDetailPage } from '../../pages/machine-detail/machine-detail';
import { PricesPage } from '../../pages/prices/prices';
import { ParameterPage } from '../../pages/parameter/parameter';
import { AboutPage } from '../../pages/about/about';
/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {

  @ViewChild('content') content: Content

  searchQuery: string = '';
  items: any = [];
  itemsTitle: Array<string> = new Array();
  buttonActive: boolean = true;
  search: boolean = true;

  constructor(public navCtrl: NavController, public navParams: NavParams, public events: Events) {
    this.initializeItems();
  }

  initializeItems() {
      this.items = [
        { image: './assets/imgs/CONCIERGERIE.png', title: 'Conciergerie', component: ConciergePage },
        { image: './assets/imgs/COLISP.png', title: 'Livraison de linge', component: DeliveryPage },
        { image: './assets/imgs/ASTUCES.png', title: 'Meilleur Astuce', component: TrickPage },
        { image: './assets/imgs/TARIFS.png', title: 'Nos Tarifs', component: PricesPage },
        { image: './assets/imgs/DISPOS.png', title: 'Disponibilité des machines', component: MachineDetailPage },
        { image: './assets/imgs/CONNEXION.png', title: 'Connexion', component: LoginPage },
        { image: './assets/imgs/parametres.png', title: 'Paramètre', component: ParameterPage },
        { image: './assets/imgs/ADMINISTRATIF.png', title: 'A propos de nous', component: AboutPage },
        { image: './assets/imgs/COURSES.png', title: 'Mon Panier', component: ShoppingPage },
        { image: './assets/imgs/ADMINISTRATIF.png', title: 'Parrainage', component: SponsorshipPage }     
      ];
  }

  openPage(item) {
    this.navCtrl.setRoot(item.component);
  }

  ionViewDidLoad() {
    this.initializeItems();
    this.setFilteredItems();
    console.log('ionViewDidLoad SearchPage');
    this.content.resize();
    this.events.publish('hideHeader', { isHidden: false });
  }
  setFilteredItems() {
    this.initializeItems();
    this.items = this.filterItems(this.searchQuery);

  }
  filterItems(searchQuery) {
    this.initializeItems();
    return this.items.filter((item) => {
      return item.title.toLowerCase().indexOf(searchQuery.toLowerCase()) > -1;
    });

  }

}
