import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RegistroPage } from '../registro/registro';
import { CreditoPage } from '../credito/credito';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  prueba:any;

  items:any
  lista:any = [
    {nombre: 'Alejandra', id: '1036950277'},
    {nombre: 'Juan pablo', id: '39440719'},
    {nombre: 'messi', id: '1897523'}
  ];
  constructor(public navCtrl: NavController) {
    this.initializeItems();
  }

  navegarARegistro(){
    this.navCtrl.push(RegistroPage);
  }

  crearRegistro(){
    this.navCtrl.push(CreditoPage);
  }

  initializeItems() {
    this.items=this.lista;
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    const val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        this.prueba = item.nombre.toLowerCase().indexOf(val.toLowerCase()) > -1;
        if(this.prueba == true){
          return this.prueba;
        }
        else{
          this.prueba = item.id.toLowerCase().indexOf(val.toLowerCase()) > -1;
          if(this.prueba == true){
            return this.prueba;
          }
        }
      })
    }
  }

}
