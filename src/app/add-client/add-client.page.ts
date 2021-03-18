import { Component, OnInit } from '@angular/core';
import { Cliente }    from './Cliente';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.page.html',
  styleUrls: ['./add-client.page.scss'],
})
export class AddClientPage implements OnInit {

  powers = ['Cédula', 'Pasaporte'];

  constructor( public modalCtrl: ModalController) { }

  ngOnInit() {
  }
  close(){
    this.modalCtrl.dismiss();
  }

}
