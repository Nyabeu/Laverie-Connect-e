import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, Events } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { timer } from 'rxjs/observable/timer';

import { HomePage } from '../pages/home/home';
import { ContactPage } from '../pages/contact/contact';
import { ParameterPage } from '../pages/parameter/parameter';
import { SearchPage } from '../pages/search/search';
import { NewsPage } from '../pages/news/news';
import { AboutPage } from '../pages/about/about';
import { PricesPage } from '../pages/prices/prices';
import { PaymentPage } from '../pages/payment/payment';
import { AvailabilityPage } from '../pages/availability/availability';
import { AccountPage } from '../pages/account/account';
import { ShoppingPage } from '../pages/shopping/shopping';
import { LoginPage } from '../pages/login/login';
import { SponsorshipPage } from '../pages/sponsorship/sponsorship';
import { ConnectAvailabilityMachinePage } from '../pages/connect-availability-machine/connect-availability-machine';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;
  
  
  pages: Array<{title: string, icon: string, component: any}>;
  personnels: Array<{title: string, icon: string, component: any}>;
  showSplash= true;
  buttonActive: boolean = true;
  footer: Array<{ icon: string, component: any}>;
  mesCommandes: 0;
  footerIsHidden: boolean = false;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen,
    public events: Events) {
    this.initializeApp();

    events.subscribe('hideHeader', (data) => {
      this.footerIsHidden = data.isHidden;
    })

    // used for an example of ngFor and navigation
    this.pages = [
    
      { title: 'Accueil', icon:'home',component: HomePage },
      { title: 'Recherche', icon:'search',component: SearchPage },
      { title: 'Nous Trouver', icon:'pin',component: ConnectAvailabilityMachinePage },
      { title: 'Nos tarifs', icon:'logo-euro',component: PricesPage },
      { title: 'Contactez-nous', icon:'call',component: ContactPage },
      { title: 'Paramètres', icon:'settings',component: ParameterPage },
      { title: 'Actualité', icon:'medal',component: NewsPage },
      { title: 'A Propos', icon:'document',component: AboutPage },
       
    ];
    this.personnels = [
      
      { title: 'Mon panier', icon:'basket',component: ShoppingPage },
      { title: 'Mon compte', icon:'contact',component: AccountPage },
      { title: 'Parrainage', icon:'share',component: SponsorshipPage }, 
    ];
    this.footer = [
      {  icon:'home',component: HomePage },
      {  icon:'search',component: SearchPage },
      {  icon:'contact',component: LoginPage }, 
      {  icon:'settings',component: ParameterPage },
      {  icon:'basket',component: ShoppingPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      timer(3000).subscribe(() => this.showSplash = false);
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
  openFooterPage(page){
    
    if(page.component == HomePage){
     this.events.publish('hideHeader', { isHidden: false });
   this.nav.setRoot(page.component);
     }
     this.nav.setRoot(page.component);
   }
 
   openPersoPage(page) {
     // Reset the content nav to have just this page
     // we wouldn't want the back button to show in this scenario
     this.nav.setRoot(page.component);
   }
}
