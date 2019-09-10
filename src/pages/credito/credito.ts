import { CreditosService } from './../../servicios/creditos.service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-credito',
  templateUrl: 'credito.html',
})
export class CreditoPage {
  credito:any = {};
  constructor(public navCtrl: NavController, public navParams: NavParams, public CreditosService: CreditosService) {
    this.credito = navParams.data.credito || {};
    
  }

  guardarCredito(){
    this.credito.id = Date.now();
    this.CreditosService.crearCredito(this.credito);
    console.log(this.credito);
  }


}
