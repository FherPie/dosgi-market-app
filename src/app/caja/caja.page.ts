import { Component, OnInit } from '@angular/core';
import { CajaServiceService } from './caja-service.service';
import { Router } from  "@angular/router";
import { DatePipe } from '@angular/common';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-caja',
  templateUrl: './caja.page.html',
  styleUrls: ['./caja.page.scss'],
  providers: [DatePipe]
})

export class CajaPage implements OnInit {
  fechaString:string;
  myDate= new Date();
  public items = [];

  cajaForm = this.fb.group({
    totalPuntoVenta : [0.00, Validators.required],
    totalEfectivo :   [0.00, Validators.required],
    totalCredito :  [0.00, Validators.required],
    fondoCaja : [0.00, Validators.required]
  });

  totalCuento:number;
  
  constructor(  public cajaService: CajaServiceService, private  router:  Router, private datePipe: DatePipe, private fb: FormBuilder) {
    this.fechaString = this.datePipe.transform(this.myDate, 'yyyy-MM-dd');
    this.cajaService.getCajas().then((todos) => {

      if(todos){
        console.log('Si hay data');
        this.items = todos; 
      }else{
        console.log('Si noy hay data'+todos);
        this.items = [];
      }

    });
  }

  ngOnInit() {
    console.log(this.cajaService.getUltimaCajaGuardada());
  }

  registerCaja(){

  this.cajaForm.value.fecha=this.myDate;

  this.cajaForm.value.abierta=true;
    //form.value.totalPuntoVenta=this.totalPuntoVenta.value;

    console.log(JSON.stringify(this.cajaForm.value));

     this.items.push( JSON.stringify(this.cajaForm.value));

   if(this.cajaService.save(this.items)==true){
    this.cajaForm.patchValue({
      totalPuntoVenta :  [0.00],
      totalEfectivo :   [0.00],
      totalCredito :  [0.00],
      fondoCaja :  [0.00]
    });

      this.router.navigateByUrl('home');
   }


   }

   calculate(first:number, second:number) {
    this.totalCuento = +first + +second;
   }
   

}
