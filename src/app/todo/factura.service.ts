import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';


@Injectable({
  providedIn: 'root'
})
export class FacturaService {

  constructor(public storage: Storage) { }

  
  getFaturas() {
    return this.storage.get('factura');  
  }

  save(data){
    this.storage.set('factura', data);
  }
}
