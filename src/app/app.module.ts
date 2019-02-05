import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { GoogleMaps, GoogleMap, GoogleMapsEvent, GoogleMapOptions, CameraPosition, MarkerOptions, Marker } from '@ionic-native/google-maps';
import { AngularFireModule } from 'angularfire2';
import { FIREBASE_CONFIG } from './firebase.credentials';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { Camera } from '@ionic-native/camera';
import { HttpClientModule } from '@angular/common/http';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { DeliveryPage } from '../pages/delivery/delivery';
import { WashingPage } from '../pages/washing/washing';
import { TrickPage } from '../pages/trick/trick';
import { IroningPage } from '../pages/ironing/ironing';
import { ConciergePage } from '../pages/concierge/concierge';
import { LoginPage } from '../pages/login/login';
import { LogoutPage } from '../pages/logout/logout';
import { PricesPage } from '../pages/prices/prices';
import { ContactPage } from '../pages/contact/contact';
import { ParameterPage } from '../pages/parameter/parameter';
import { OrderPage } from '../pages/order/order';
import { SearchPage } from '../pages/search/search';
import { NewsPage } from '../pages/news/news';
import { HelpPage } from '../pages/help/help';
import { AboutPage } from '../pages/about/about';
import { AccountPage } from '../pages/account/account';
import { AvailabilityPage } from '../pages/availability/availability';
import { ShoppingPage } from '../pages/shopping/shopping';
import { SponsorshipPage } from '../pages/sponsorship/sponsorship';
import { PaymentPage } from '../pages/payment/payment';
import { MachineDetailPage } from '../pages/machine-detail/machine-detail';
import { RegisterPage } from '../pages/register/register';
import { CreditedMyAccountPage } from '../pages/credited-my-account/credited-my-account';
import { ShoeMakerPage } from '../pages/shoe-maker/shoe-maker';
import { RetouchPage } from '../pages/retouch/retouch';
import { ConnectAvailabilityMachinePage } from '../pages/connect-availability-machine/connect-availability-machine';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ProductServiceProvider } from '../providers/product-service/product-service';

@NgModule({
  declarations: [
    MyApp,
    OrderPage,
    HomePage,
    DeliveryPage,
    WashingPage,
    TrickPage,
    HelpPage,
    IroningPage,
    ConciergePage,
    LoginPage,
    LogoutPage,
    PricesPage,
    ContactPage,
    ParameterPage,
    SearchPage,
    NewsPage,
    AboutPage,
    RegisterPage,
    SponsorshipPage,
    AvailabilityPage,
    ShoppingPage,
    PaymentPage,
    AccountPage,
    RetouchPage,
    MachineDetailPage,
    CreditedMyAccountPage,
    ShoeMakerPage,
    ConnectAvailabilityMachinePage


  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp, {
      scrollAssist: true,
      autoFocusAssist: true
    }),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(FIREBASE_CONFIG)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    OrderPage,
    HomePage,
    DeliveryPage,
    WashingPage,
    TrickPage,
    HelpPage,
    IroningPage,
    ConciergePage,
    LoginPage,
    LogoutPage,
    PricesPage,
    ContactPage,
    ParameterPage,
    SearchPage,
    NewsPage,
    AboutPage,
    RegisterPage,
    SponsorshipPage,
    AvailabilityPage,
    ShoppingPage,
    PaymentPage,
    AccountPage,
    RetouchPage,
    MachineDetailPage,
    CreditedMyAccountPage,
    ShoeMakerPage,
    ConnectAvailabilityMachinePage


  ],
  providers: [
    StatusBar,
    GoogleMaps,
    Camera,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    ProductServiceProvider
  ]
})
export class AppModule { }
