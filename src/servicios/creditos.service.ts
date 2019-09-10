import { AngularFireDatabase } from '@angular/fire/database';
import { Injectable } from '@angular/core';

@Injectable()
export class CreditosService{
    constructor(public afDB: AngularFireDatabase){

    }
    public getCreditos(){
        return this.afDB.list('/creditos/');
    }

    public getCredito(id){
        return this.afDB.object('/creditos/'+ id);
    }

    public crearCredito(credito){
        return this.afDB.database.ref('/creditos/' + credito.id).set(credito);
    }
}