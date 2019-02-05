import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';

/**
 * Generated class for the MachineDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-machine-detail',
  templateUrl: 'machine-detail.html',
})
export class MachineDetailPage {

  
  machines: Array<{ image:string, poids: string, id: string, etat: string, categorie: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams,public alert: AlertController) {
    this.getMachine();
  }

  getMachine(){
    this.machines = [
          { image: './assets/imgs/lave.png', poids:'8kg', id: '1',etat:"Occupée", categorie:'Machine à Laver'},
          { image: './assets/imgs/lave.png', poids:'8kg', id: '2', etat:'Occupée', categorie:'Machine à Laver'},
          { image: './assets/imgs/lave.png', poids:'16kg', id: '3', etat:'Libre', categorie:'Machine à Laver'},
          { image: './assets/imgs/lave.png', poids:'8kg', id: '5',  etat:'Libre', categorie:'Machine à Laver'},
          { image: './assets/imgs/lave.png', poids:'16kg', id: '6', etat:'Occupée', categorie:'Machine à Laver'},
          { image: './assets/imgs/lave.png', poids:'16kg', id: '4', etat:'Occupée', categorie:'Machine à Laver'},
          { image: './assets/imgs/lave.png', poids:'18kg', id: '10',  etat:'Libre', categorie:'Sèche Linge'},
          { image: './assets/imgs/lave.png', poids:'18kg', id: '11', etat:'Occupée', categorie:'Sèche Linge'}
        ]
      };
      getColor(etat) { 
        switch (etat) {
          case 'Occupée':
            return 'red';
          case 'Libre':
            return 'green';
        }
      }
      showAlert(el) {
      
        if(el.etat === "Libre"){
        let alert = this.alert.create({
          title: 'Voulez-vous reserver ?',
          subTitle: el.categorie +' ' + el.poids,
          message: 'Reservation pour 15 minutes',
          buttons: [
            {
              text: 'Non',
              role: 'Non',
              handler: () => {
                console.log('Cancel clicked');
              }
            },
            {
              text: 'Oui',
              handler: () => {
                console.log('Oui clicked');
              }
            }
          ]
        });
        alert.present();
      }
      }
  Alert(toto){
    this.showAlert(toto);
  }
    ionViewDidLoad() {
     
      console.log('ionViewDidLoad MachineDetailPage');
 
    }
  

}
