import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Producto } from './productos';

@Component({
  selector: 'app-seleccionar-productos',
  templateUrl: './seleccionar-productos.component.html',
  styleUrls: ['./seleccionar-productos.component.scss'],
})
export class SeleccionarProductosComponent implements OnInit {

  categorias;
  productos:Producto[];
  activated=false;
  tags:string[];
  costo:number;
  name:string="Andres"
  age:number=30;


  borrarTag(tag){
    for (let index = 0; index < this.tags.length; index++) {
      if(tag==this.tags[index]){
         this.tags.splice(index, 1);
      }
    }
  }

  enviarTags(newTag){
    console.log(newTag.value);
    this.tags.push(newTag.value);
    newTag.value='';
    newTag.focus();
    return false;
  }
  constructor( public modalCtrl: ModalController) { }
  

  product1:Producto;
  product2:Producto;

  ngOnInit() {
   this.categorias = [
      { val: 'Perros', isChecked: true },
      { val: 'Gatos', isChecked: false },
      { val: 'Otros', isChecked: false }
    ];
  
    this.tags=['Perros', 'Gatos', 'Comida', 'Accesorios'];


    this.product1={codigo:"0001" , nombre:"Collar perros"};
    

    this.product2={codigo:"0002", nombre:"Atun Gatos" };

    
    this.productos = [this.product1,this.product2 ];

    this.costo=20.0;

  }

  close(){
    this.modalCtrl.dismiss();
  }
}
