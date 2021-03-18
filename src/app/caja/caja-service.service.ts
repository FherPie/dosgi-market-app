import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class CajaServiceService {

  constructor(public storage: Storage){}

  public arrayCaja;
   public hola;

  getUltimaCajaGuardada() {
        this.storage.get('caja').then((val) => {
      console.log('Your age is', val);
    });

    // this.arrayCaja =this.storage.get('caja');
    // console.log(this.arrayCaja);
    // if(this.arrayCaja=='undefined' || this.arrayCaja.length==0 ){
    //   return null;
    // }else{
    //    return this.arrayCaja [this.arrayCaja.length-1];
    // }
    return   null;
  }

  getCajas() {
    return this.storage.get('caja');  
  }

  save(data):boolean{
    this.storage.set('caja', data);
    return true;
  }


}
