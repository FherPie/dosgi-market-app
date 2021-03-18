import { Component, OnInit } from '@angular/core';
import {NavController, ModalController, IonRefresher} from '@ionic/angular';
import { Router } from '@angular/router';
import { HomePage } from '../home/home.page';
import {AddItemPage} from '../agregar-factura/add-item.page';
import { OverlayEventDetail } from '@ionic/core';
import { ItemDetailPage } from '../item-detail/item-detail.page';
import { NavigationExtras } from '@angular/router';
import {FacturaService} from  './factura.service';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {

  public items;

  constructor(public navCtrl: NavController, public modalCtrl: ModalController,  public facturaService: FacturaService) {

    this.facturaService.getFaturas().then((todos) => {

      if(todos){
        console.log('Si hay data');
        this.items = todos; 
      }else{
        console.log('Si noy hay data'+todos);
        this.items = [];
      }

    });

   }

  ngOnInit() {}

  ionViewDidLoad(){

    this.items = [
      {title: 'Factura 00021', description: 'test1'},
      {title: 'Factura 00022', description: 'test2'},
      {title: 'Factura 00023', description: 'test3'}
    ];

  }

  async addItem() {
    const modal: HTMLIonModalElement =
       await this.modalCtrl.create({
          component: AddItemPage,
          componentProps: {
             aParameter: true,
             otherParameter: new Date()
          }
    });
     
    modal.onDidDismiss().then((detail: OverlayEventDetail) => {
       if (detail !== null  && detail.data!==null && typeof detail.data !== 'undefined' ) {
         console.log('The result:', detail.data);
         this.saveItem(detail.data);
       }
    });
    
    await modal.present();
}

  saveItem(item){
    this.items.push(item);
    this.facturaService.save(this.items);
  }

  viewItem(item){
    console.log(item);
    let navigationExtras: NavigationExtras = {
      queryParams: {
          item: JSON.stringify(item),
          refresh: IonRefresher
      }
  };

  
  this.navCtrl.navigateForward(['item-detail'],  navigationExtras);

  }

}
