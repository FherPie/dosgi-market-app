import { Component, OnInit } from '@angular/core';
import {NavController, ModalController} from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core';
import { SeleccionarProductosComponent } from '../seleccionar-productos/seleccionar-productos.component';
import { CobrarComponent } from '../cobrar/cobrar.component';

import { DatePipe } from '@angular/common';
import { AddClientPage } from '../add-client/add-client.page';
import {ClienteService} from  '../add-client/cliente.service';


@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.page.html',
  styleUrls: ['./add-item.page.scss'],
  providers: [DatePipe]
})
export class AddItemPage implements OnInit {

  title: string;
  description: string;
  public items;
  fechaString:string;
  myDate= new Date();

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, private datePipe: DatePipe,  public clienteService: ClienteService) {
    this.fechaString = this.datePipe.transform(this.myDate, 'yyyy-MM-dd');
  }

  saveItem(){
    console.log(this.title);
    let newItem = {
      title: this.title,
      description: this.description,
      fecha: this.fechaString
    };
    this.modalCtrl.dismiss(newItem);
  }

  close(){
    this.modalCtrl.dismiss();
  }

  ngOnInit() {
    this.items = [
      {title: 'Collar De Gato', description: 'test1'},
      {title: 'Atun para Gato 1kg', description: 'test2'},
      {title: 'Arena para Gato', description: 'test3'}
    ];
  }

  async agregarCliente() {
    const modal: HTMLIonModalElement =
       await this.modalCtrl.create({
          component: AddClientPage,
          componentProps: {
             aParameter: true,
             otherParameter: new Date()
          }
    });

    modal.onDidDismiss().then((detail: OverlayEventDetail) => {
       if (detail !== null) {
      
       }
    });
    
    await modal.present();
}



guardarCliente(item){
  this.clienteService.save(this.items);
}


  async agregarProducto() {
    const modal: HTMLIonModalElement =
       await this.modalCtrl.create({
          component: SeleccionarProductosComponent,
          componentProps: {
             aParameter: true,
             otherParameter: new Date()
          }
    });

    modal.onDidDismiss().then((detail: OverlayEventDetail) => {
       if (detail !== null) {
      
       }
    });
    
    await modal.present();
}

async agregarCobro() {
  const modal: HTMLIonModalElement =
     await this.modalCtrl.create({
        component: CobrarComponent,
        componentProps: {
           aParameter: true,
           otherParameter: new Date()
        }
  });

  modal.onDidDismiss().then((detail: OverlayEventDetail) => {
     if (detail !== null) {
    
     }
  });
  
  await modal.present();
}

}
