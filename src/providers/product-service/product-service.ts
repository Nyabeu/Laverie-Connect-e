import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the ProductServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProductServiceProvider {

  data: any;
  url: string = "./assets/data/products.json";
  urlP: string = "./assets/data/prices.json";
  commandes: any = [];
  total: any = 0;
  articles: any = 0;

  constructor(public http: HttpClient) {
    console.log('Hello ProductServiceProvider Provider');
  }
  load() {

    if (this.data) {
      return Promise.resolve(this.data);
    }
    return new Promise(resolve => {

      let donnee: Observable<any> = this.http.get(this.url);

      donnee.subscribe(result => {
        //console.log("11211111111111111111111111111111111");
        this.data = result;
        resolve(this.data);

      });

    });

  }
  
  addItem(eltObj) {
    this.articles++;

    let arry = [eltObj];
    //console.log(eltObj.name);
    if (this.isSelected(eltObj.name)) {

      eltObj.qte += 1;
      return;
    } else {
      eltObj.qte += 1;
      this.commandes = this.commandes.concat(arry);
      console.log(this.commandes);
    }
    this.getCalculTotal();

  }
  removeItem(eltObj) {
    this.articles--;
    if (this.isSelected(eltObj.name)) {
      eltObj.qte -= 1;
      if(eltObj.qte == 0){
        const index: number = this.commandes.indexOf(eltObj);
        //console.log(index) ;
        if (index !== -1) {
          this.commandes.splice(index, 1);
        }       
      }
    } 
    this.getCalculTotal();
  }

  getNbCommandes() {
    return this.articles;
  }
  getListShopping() {
    return this.commandes;
  }
  getCalculTotal() {
    this.total = 0;
    for (var i = 0; i < this.commandes.length; i++) {
      this.total = this.total + this.commandes[i].price * this.commandes[i].qte;
    }
    return this.total;
  }
  
  isSelected(name) {
    let selected = false;
    for (let a = 0; a < this.commandes.length; a++) {
      
      if (this.commandes[a].name === name) {
        selected = true;
        break;
      }
     
    }
    return selected;
  }

  loadPrices() {

    if (this.data) {
      return Promise.resolve(this.data);
    }
    return new Promise(resolve => {

      let donnee: Observable<any> = this.http.get(this.urlP);

      donnee.subscribe(result => {
        this.data = result;
        resolve(this.data);

      });

    });

  }


  emptyBasket(eltObj){ 
    let nbre = eltObj.qte ;

    for (let a = 0; a < nbre; a++) {
      this.removeItem(eltObj) ;

    }
    
    }

}
