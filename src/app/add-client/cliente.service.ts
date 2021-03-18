import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(public storage: Storage){}

  public arrayCaja;
  public hola;

  getCajas() {
    return this.storage.get('cliente');  
  }

  save(data):boolean{
    this.storage.set('cliente', data);
    return true;
  }


}
